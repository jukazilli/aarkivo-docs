import { readdirSync, statSync, readFileSync } from "node:fs";
import { resolve, relative, basename } from "node:path";

const repoRoot = resolve(".");

const allowedFiles = new Set([
  "README.md",
  "AGENTS.md",
  ".gitignore",
  ".git",
  ".github",
  "scripts",
]);

const allowedPublicDocPattern = /^0[1-8]-[\w-]+\.md$/;

const forbiddenPathPatterns = [
  /plano/i,
  /reconcilia/i,
  /decisions?/i,
  /tasks?/i,
  /evidence/i,
  /runbooks?/i,
  /ADR-\d+/i,
  /DEC-\d+/i,
  /\.(ts|tsx|jsx|sql|prisma|drizzle|env)$/i,
  /wrangler\./i,
  /next\.config\./i,
];

const leakContentPatterns = [
  { pattern: /postgresql:\/\/[^ \n]+/i, label: "Database connection string" },
  { pattern: /sbp_[a-zA-Z0-9_-]{20,}/i, label: "Supabase service/management key" },
  { pattern: /eyJhbGciOi[a-zA-Z0-9._-]{50,}/i, label: "JWT / Bearer token" },
  { pattern: /c:[\\\/]projetos[\\\/]oplib/i, label: "Caminho de filesystem interno" },
];

function getAllFiles(dir, fileList = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    if (entry === ".git" || entry === "node_modules") continue;
    const fullPath = resolve(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = getAllFiles(repoRoot);
const violations = [];

for (const filePath of allFiles) {
  const relPath = relative(repoRoot, filePath).replace(/\\/g, "/");
  const base = basename(filePath);

  // Check top-level files
  if (!relPath.includes("/")) {
    if (!allowedFiles.has(base) && !allowedPublicDocPattern.test(base)) {
      violations.push(`[ARQUIVO PROIBIDO NA RAIZ PÚBLICA]: ${relPath}`);
    }
  } else {
    // Check files inside subdirectories (.github, scripts)
    const topDir = relPath.split("/")[0];
    if (topDir !== ".github" && topDir !== "scripts") {
      violations.push(`[DIRETÓRIO NÃO PERMITIDO NO REPO PÚBLICO]: ${relPath}`);
    }
  }

  // Check forbidden naming patterns
  for (const forbidden of forbiddenPathPatterns) {
    if (forbidden.test(relPath)) {
      violations.push(`[PADRÃO INTERNO/PRIVADO DETECTADO]: ${relPath} coincide com ${forbidden}`);
    }
  }

  // Content leak scan for markdown files
  if (relPath.endsWith(".md")) {
    const content = readFileSync(filePath, "utf-8");
    for (const { pattern, label } of leakContentPatterns) {
      if (pattern.test(content)) {
        violations.push(`[VAZAMENTO DE DADO INTERNO EM ${relPath}]: ${label}`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error("❌ FALHA NA VALIDAÇÃO DE FRONTEIRA DO REPOSITÓRIO PÚBLICO:");
  for (const v of violations) {
    console.error(` - ${v}`);
  }
  process.exit(1);
} else {
  console.log(`✅ Validação de fronteira do aarkivo-docs passou. ${allFiles.length} arquivos checados. Nenhum documento privado ou vazamento detectado.`);
}

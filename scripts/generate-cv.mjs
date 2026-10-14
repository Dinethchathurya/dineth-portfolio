import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const lines = [
  "DINETH CHATHURYA",
  "Associate DevOps & Platform Engineer",
  "dinethchathurya2002@gmail.com  |  linkedin.com/in/dineth-chathurya  |  github.com/Dinethchathurya",
  "",
  "EDUCATION",
  "Master of Computing Technology (MCT) — UCSC (In Progress)",
  "BSc (Hons) Computer Science — Plymouth University (Second Class Upper)",
  "",
  "CORE STRENGTHS",
  "Cloud & Linux: AWS, Ubuntu, SSH",
  "Containers & IaC: Docker, Docker Compose, Kubernetes, Terraform",
  "CI/CD: GitHub Actions, Jenkins",
  "Backend & AI: Python, Node.js, RAG pipelines, REST APIs",
  "",
  "EXPERIENCE",
  "Associate DevOps Engineer — Jinasena Engineering Technologies",
  "Linux VPS administration, CI/CD pipelines, 99%+ uptime.",
  "",
  "Freelance Software & Integration Engineer",
  "10+ client systems, RAG chatbot solutions, mobile apps.",
  "",
  "KEY PROJECTS",
  "ClickWorthy (clickworthy.cloud) — Linux VPS, Nginx reverse proxy, 99.9% uptime",
  "Dental Booking Platform — AWS, Terraform, Docker, WebSockets, Stripe API",
  "CINEMAX Platform — Docker Compose multi-service architecture, CI quality gates",
  "",
  "RESEARCH",
  'Lead Author, "Blockchain-Based E-Voting System on ICP" (NSRSIT \'25)',
];

function pdfEscape(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const startY = 760;
const leading = 16;
const content = lines
  .map((line, i) => {
    const y = startY - i * leading;
    const size = i === 0 ? 18 : i === 1 ? 12 : 10;
    return `BT /F1 ${size} Tf 48 ${y} Td (${pdfEscape(line)}) Tj ET`;
  })
  .join("\n");

const stream = `q
0.043 0.059 0.090 rg
0 0 612 792 re f
0.063 0.722 0.506 rg
48 780 516 2 re f
Q
0.965 0.976 0.984 rg
${content}
`;

const objects = [];
const add = (body) => {
  objects.push(body);
  return objects.length;
};

const fontId = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const contentId = add(
  `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`,
);
const pageId = add(
  `<< /Type /Page /Parent 0 0 R /MediaBox [0 0 612 792] /Contents ${contentId} 0 R /Resources << /Font << /F1 ${fontId} 0 R >> >> >>`,
);
const pagesId = add(`<< /Type /Pages /Kids [${pageId} 0 R] /Count 1 >>`);
const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

const patched = objects.map((body, idx) => {
  const id = idx + 1;
  if (id === pageId) {
    return body.replace("/Parent 0 0 R", `/Parent ${pagesId} 0 R`);
  }
  return body;
});

let pdf = "%PDF-1.4\n";
const offsets = [0];
patched.forEach((body, idx) => {
  offsets.push(Buffer.byteLength(pdf, "binary"));
  pdf += `${idx + 1} 0 obj\n${body}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf, "binary");
pdf += `xref\n0 ${patched.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i <= patched.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${patched.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "dineth-chathurya-cv.pdf");
writeFileSync(out, pdf, "binary");
console.log("wrote", out);

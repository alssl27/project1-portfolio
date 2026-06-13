const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const htmlFiles = ["index.html", "aboutme.html", "projects.html", "contact.html"];
const cssFile = "assets/css/style.css";
const requiredFiles = [
  ...htmlFiles,
  cssFile,
  "README.md",
  "TESTING.md",
  "DISTINCTION-CHECKLIST.md",
  "CNAME",
  "assets/resume.pdf",
];
const failures = [];

function fail(message) {
  failures.push(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function isExternal(reference) {
  return /^(https?:)?\/\//.test(reference);
}

function localReferenceExists(reference) {
  const cleanReference = reference.split("#")[0].split("?")[0];

  if (!cleanReference || cleanReference.startsWith("mailto:")) {
    return true;
  }

  return fs.existsSync(path.join(root, cleanReference));
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    fail(`required file missing: ${file}`);
  }
}

for (const file of htmlFiles) {
  const html = read(file);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const h1Count = (html.match(/<h1\b/gi) || []).length;

  if (!/^<!doctype html>/i.test(html.trim())) {
    fail(`${file}: missing HTML5 doctype`);
  }

  if (!/<html\b[^>]*\blang="en"/i.test(html)) {
    fail(`${file}: missing lang="en"`);
  }

  if (!/<main\b[^>]*\bid="main-content"/i.test(html)) {
    fail(`${file}: missing main-content target`);
  }

  if (!/<a\b[^>]*class="skip-link"[^>]*href="#main-content"/i.test(html)) {
    fail(`${file}: missing skip link`);
  }

  if (h1Count !== 1) {
    fail(`${file}: expected one h1, found ${h1Count}`);
  }

  if (duplicateIds.length) {
    fail(`${file}: duplicate ids found: ${[...new Set(duplicateIds)].join(", ")}`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/i.test(match[0])) {
      fail(`${file}: image missing alt attribute`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*href="(https?:\/\/[^"]+)"[^>]*>/gi)) {
    const tag = match[0];

    if (!/\btarget="_blank"/i.test(tag)) {
      fail(`${file}: external link missing target="_blank": ${match[1]}`);
    }

    if (!/\brel="[^"]*\bnoopener\b[^"]*\bnoreferrer\b[^"]*"/i.test(tag)) {
      fail(`${file}: external link missing rel="noopener noreferrer": ${match[1]}`);
    }
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];

    if (
      !isExternal(reference) &&
      !reference.startsWith("#") &&
      !localReferenceExists(reference)
    ) {
      fail(`${file}: missing local reference "${reference}"`);
    }

    if (reference.includes("\\")) {
      fail(`${file}: web path contains a backslash: "${reference}"`);
    }
  }

  const forbiddenPatterns = [
    [/<script\b/i, "script element"],
    [/<style\b/i, "inline style block"],
    [/\bstyle="/i, "inline style attribute"],
    [/\bbootstrap\b/i, "Bootstrap reference"],
    [/\bfont-awesome\b|\bfa-(?:brands|solid|regular)\b/i, "Font Awesome reference"],
    [/\blorem ipsum\b/i, "placeholder text"],
  ];

  for (const [pattern, description] of forbiddenPatterns) {
    if (pattern.test(html)) {
      fail(`${file}: contains ${description}`);
    }
  }
}

const css = read(cssFile);

if (/@import\b/i.test(css)) {
  fail(`${cssFile}: contains an external @import`);
}

const javascriptFiles = [];

function findJavaScript(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") {
      continue;
    }

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      findJavaScript(fullPath);
    } else if (entry.name.endsWith(".js") && fullPath !== path.join(root, "tools", "check-static-site.js")) {
      javascriptFiles.push(path.relative(root, fullPath));
    }
  }
}

findJavaScript(root);

if (javascriptFiles.length) {
  fail(`unexpected JavaScript files: ${javascriptFiles.join(", ")}`);
}

if (failures.length) {
  console.error("Static site checks failed:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("Static site checks passed.");

const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const htmlFiles = ["index.html", "aboutme.html", "projects.html", "contact.html"];
const sourceFiles = [...htmlFiles, "assets/css/style.css", "assets/js/script.js"];
const consolePattern = new RegExp("console" + "\\.log\\(");
const todoPattern = new RegExp("\\b" + "TO" + "DO" + "\\b", "i");
const fixmePattern = new RegExp("\\b" + "FIX" + "ME" + "\\b", "i");
const emptyHashPattern = new RegExp("href=" + '"' + "#" + '"');

const failures = [];

function fail(message) {
  failures.push(message);
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function existsLocal(reference) {
  const cleaned = reference.split("#")[0].split("?")[0];
  if (!cleaned) {
    return true;
  }
  return fs.existsSync(path.join(root, cleaned));
}

function isExternal(reference) {
  return /^(https?:)?\/\//.test(reference) || reference.startsWith("mailto:") || reference.startsWith("tel:");
}

for (const file of htmlFiles) {
  const html = read(file);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const seen = new Set();

  for (const id of ids) {
    if (seen.has(id)) {
      fail(`${file}: duplicate id "${id}"`);
    }
    seen.add(id);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/\balt="/i.test(tag)) {
      fail(`${file}: image missing alt attribute: ${tag}`);
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/gi)) {
    const tag = match[0];
    if (!/\brel="[^"]*\bnoopener\b[^"]*\bnoreferrer\b[^"]*"/i.test(tag)) {
      fail(`${file}: target="_blank" link missing rel="noopener noreferrer": ${tag}`);
    }
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const reference = match[1];
    if (!isExternal(reference) && !reference.startsWith("#") && !existsLocal(reference)) {
      fail(`${file}: missing local reference "${reference}"`);
    }
  }

  if (/<style\b/i.test(html)) {
    fail(`${file}: contains an inline <style> block`);
  }

  const inlineScripts = [...html.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>/gi)];
  if (inlineScripts.length) {
    fail(`${file}: contains inline script blocks`);
  }

  if (/lorem ipsum/i.test(html)) {
    fail(`${file}: Lorem Ipsum placeholder text found`);
  }
}

for (const file of sourceFiles) {
  const text = read(file);
  const patterns = [
    [todoPattern, "task marker"],
    [fixmePattern, "fix marker"],
    [consolePattern, "debug logging call"],
    [emptyHashPattern, "empty hash link"],
  ];

  for (const [pattern, label] of patterns) {
    if (pattern.test(text)) {
      fail(`${file}: ${label} found`);
    }
  }
}

if (failures.length) {
  console.error("Static site checks failed:");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

process.stdout.write("Static site checks passed.\n");

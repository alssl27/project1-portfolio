const textElement = document.getElementById("typewriter-text");
const subTextElement = document.getElementById("typewriter-subtext");
const typingSound = document.getElementById("typing-sound");

const mainText = "SARAH COLLINS";
const subText = "FullStack Web Developer";

let mainIndex = 0;
let subIndex = 0;

function playTypingSound() {
  if (!typingSound) return;
  typingSound.volume = 0.2;
  typingSound.currentTime = 0;
  typingSound.play().catch(() => {});
}

function typeMainText() {
  if (!textElement || !subTextElement) return;

  if (mainIndex <= mainText.length) {
    textElement.textContent = mainText.substring(0, mainIndex);
    mainIndex++;
    playTypingSound();
    setTimeout(typeMainText, 90 + Math.random() * 60);
  } else {
    setTimeout(typeSubText, 400);
  }
}

function typeSubText() {
  if (!textElement || !subTextElement) return;

  if (subIndex <= subText.length) {
    subTextElement.textContent = subText.substring(0, subIndex);
    subIndex++;
    playTypingSound();
    setTimeout(typeSubText, 90 + Math.random() * 60);
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      subTextElement.textContent = "";
      mainIndex = 0;
      subIndex = 0;
      setTimeout(typeMainText, 800);
    }, 1200);
  }
}

function applyBionicReading() {
  const surfaces = document.querySelectorAll("[data-bionic]");

  if (!surfaces.length) return;

  const ignoredParents = new Set([
    "SCRIPT",
    "STYLE",
    "NOSCRIPT",
    "SVG",
    "TEXTAREA",
    "INPUT",
    "CODE",
    "PRE",
    "KBD",
  ]);

  const wrapWord = (word) => {
    const match = word.match(/^([\W_]*)([A-Za-z0-9À-ž'’-]+)([\W_]*)$/);

    if (!match) return word;

    const [, prefix, core, suffix] = match;
    if (core.length < 4) return word;

    const emphasisLength = Math.max(1, Math.ceil(core.length * 0.5));
    const emphasized = core.slice(0, emphasisLength);
    const remainder = core.slice(emphasisLength);

    return `${prefix}<span class="bionic-emphasis">${emphasized}</span>${remainder}${suffix}`;
  };

  surfaces.forEach((surface) => {
    const walker = document.createTreeWalker(surface, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        const parent = node.parentElement;
        if (!parent || ignoredParents.has(parent.tagName) || parent.closest(".bionic-emphasis")) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    textNodes.forEach((node) => {
      const replacement = node.nodeValue
        .split(/(\s+)/)
        .map((chunk) => (chunk.trim() ? wrapWord(chunk) : chunk))
        .join("");

      if (replacement !== node.nodeValue) {
        const span = document.createElement("span");
        span.innerHTML = replacement;
        node.parentNode.replaceChild(span, node);
      }
    });
  });
}

function setupTypewriter() {
  if (!textElement || !subTextElement) return;

  textElement.textContent = "";
  subTextElement.textContent = "";
  mainIndex = 0;
  subIndex = 0;
  typeMainText();
}

function setupCardModal() {
  const cards = document.querySelectorAll(".card");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const modalContent = document.getElementById("modalContent");

  if (!cards.length || !overlay || !closeBtn || !modalContent) return;

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("more-btn")) return;
      expandCard(card, overlay, modalContent);
    });

    const moreBtn = card.querySelector(".more-btn");
    if (moreBtn) {
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        expandCard(card, overlay, modalContent);
      });
    }
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
}

function expandCard(card, overlay, modalContent) {
  const title = card.getAttribute("data-title");
  const desc = card.getAttribute("data-desc");
  const img = card.querySelector(".card-image");
  const avatar = card.querySelector(".card-avatar");
  const imgSrc = img ? img.src : "";
  const imgAlt = img ? img.alt : "";
  const avatarSrc = avatar ? avatar.src : "";
  const avatarAlt = avatar ? avatar.alt : "";

  modalContent.innerHTML = `
    <div class="card-image-container" style="margin-bottom:1.5rem;">
      <img src="${imgSrc}" alt="${imgAlt}" class="card-image" />
      <img src="${avatarSrc}" alt="${avatarAlt}" class="card-avatar" />
    </div>
    <h2>${title}</h2>
    <hr>
    <p>${desc}</p>
    <p>You can add images or long-form case studies here.</p>
  `;

  overlay.classList.add("active");
}

function initializeApp() {
  setupTypewriter();
  setupCardModal();
  applyBionicReading();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
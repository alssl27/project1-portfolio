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
  const cards = document.querySelectorAll(".project-card");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const modalContent = document.getElementById("modalContent");

  if (!cards.length || !overlay || !closeBtn || !modalContent) return;

  let lastFocusedElement = null;
  const focusableSelector = [
    "button",
    "[href]",
    "input",
    "select",
    "textarea",
    "[tabindex]:not([tabindex='-1'])",
  ].join(",");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (e.target.classList.contains("more-btn")) return;
      lastFocusedElement = document.activeElement;
      expandCard(card, overlay, modalContent);
    });

    const moreBtn = card.querySelector(".more-btn");
    if (moreBtn) {
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        lastFocusedElement = document.activeElement;
        expandCard(card, overlay, modalContent);
      });
    }

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        lastFocusedElement = document.activeElement;
        expandCard(card, overlay, modalContent);
      }
    });
  });

  const closeModal = () => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
    }

    if (e.key === "Tab") {
      const focusable = overlay.querySelectorAll(focusableSelector);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

function expandCard(card, overlay, modalContent) {
  const title = card.getAttribute("data-title");
  const desc = card.getAttribute("data-desc");
  const role = card.getAttribute("data-role");
  const tech = card.getAttribute("data-tech");
  const link = card.getAttribute("data-link");
  const img = card.querySelector(".card-image");
  const avatar = card.querySelector(".card-avatar");
  const imgSrc = img ? img.src : "";
  const imgAlt = img ? img.alt : "";
  const avatarSrc = avatar ? avatar.src : "";
  const avatarAlt = avatar ? avatar.alt : "";

  modalContent.innerHTML = `
    <div class="card-image-container modal-image">
      <img src="${imgSrc}" alt="${imgAlt}" class="card-image" />
      <img src="${avatarSrc}" alt="${avatarAlt}" class="card-avatar" />
    </div>
    <h2 id="modalTitle">${title}</h2>
    <p class="text-muted" id="modalDescription">${desc}</p>
    <hr>
    <p><strong>Role:</strong> ${role || "Product Design + Frontend"}</p>
    <p><strong>Tech:</strong> ${tech || "HTML · CSS · JavaScript"}</p>
    <a href="${link || "#"}" class="project-link" target="_blank" rel="noopener">View Source</a>
  `;

  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = overlay.querySelector("#closeBtn");
  if (closeBtn) {
    closeBtn.focus();
  }
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
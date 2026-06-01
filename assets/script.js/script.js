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
    "BUTTON",
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
  let lastFocusedElement = null;

  if (!cards.length || !overlay || !closeBtn || !modalContent) return;

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("more-btn")) return;
      lastFocusedElement = document.activeElement;
      expandCard(card, overlay, modalContent);
      closeBtn.focus();
    });

    const moreBtn = card.querySelector(".more-btn");
    if (moreBtn) {
      moreBtn.setAttribute("aria-expanded", "false");
      moreBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        lastFocusedElement = document.activeElement;
        expandCard(card, overlay, modalContent);
        closeBtn.focus();
      });
    }
  });

  closeBtn.addEventListener("click", () => {
    closeCardModal(overlay, lastFocusedElement);
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeCardModal(overlay, lastFocusedElement);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("active")) {
      return;
    }

    if (event.key === "Escape") {
      closeCardModal(overlay, lastFocusedElement);
      return;
    }

    if (event.key === "Tab") {
      keepFocusInsideDialog(event, overlay);
    }
  });

  function expandCardWithFocus(card) {
    lastFocusedElement = document.activeElement;
    expandCard(card, overlay, modalContent);
    closeBtn.focus();
  }

  cards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && event.target === card) {
        expandCardWithFocus(card);
      }
    });
  });
}

function expandCard(card, overlay, modalContent) {
  const title = card.getAttribute("data-title");
  const desc = card.getAttribute("data-desc");
  const problem = card.getAttribute("data-problem");
  const users = card.getAttribute("data-users");
  const decisions = card.getAttribute("data-decisions");
  const accessibility = card.getAttribute("data-accessibility");
  const testing = card.getAttribute("data-testing");
  const outcome = card.getAttribute("data-outcome");
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
    <h2 id="modalTitle">${title}</h2>
    <hr>
    <p>${desc}</p>
    <ul class="case-study-list">
      <li><strong>User problem:</strong> ${problem}</li>
      <li><strong>Target users:</strong> ${users}</li>
      <li><strong>UX decisions:</strong> ${decisions}</li>
      <li><strong>Accessibility:</strong> ${accessibility}</li>
      <li><strong>Testing evidence:</strong> ${testing}</li>
      <li><strong>Outcome:</strong> ${outcome}</li>
    </ul>
  `;

  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  const activeButton = document.activeElement;
  if (activeButton && activeButton.matches(".more-btn")) {
    activeButton.setAttribute("aria-expanded", "true");
  }
  document.body.classList.add("modal-open");
}

function closeCardModal(overlay, lastFocusedElement) {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    if (lastFocusedElement.matches && lastFocusedElement.matches(".more-btn")) {
      lastFocusedElement.setAttribute("aria-expanded", "false");
    }
    lastFocusedElement.focus();
  }
}

function keepFocusInsideDialog(event, overlay) {
  const focusable = overlay.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupMotionToggle() {
  const video = document.getElementById("heroVideo");
  const button = document.getElementById("motionToggle");

  if (!video || !button) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    video.pause();
    button.textContent = "Play motion";
    button.setAttribute("aria-pressed", "true");
  }

  button.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      button.textContent = "Pause motion";
      button.setAttribute("aria-pressed", "false");
    } else {
      video.pause();
      button.textContent = "Play motion";
      button.setAttribute("aria-pressed", "true");
    }
  });
}

function initializeApp() {
  setupTypewriter();
  setupCardModal();
  setupMotionToggle();
  applyBionicReading();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

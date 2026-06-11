function userPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setTextPair(primaryElement, secondaryElement, primaryText, secondaryText) {
  if (!primaryElement || !secondaryElement) {
    return;
  }

  primaryElement.textContent = primaryText;
  secondaryElement.textContent = secondaryText;
}

function typeText(element, text, delay) {
  return new Promise((resolve) => {
    let characterIndex = 0;
    element.classList.add("is-typing");

    function typeNextCharacter() {
      if (characterIndex >= text.length) {
        element.classList.remove("is-typing");
        resolve();
        return;
      }

      element.textContent += text[characterIndex];
      characterIndex += 1;
      window.setTimeout(typeNextCharacter, delay);
    }

    typeNextCharacter();
  });
}

async function setupHomeTypewriter() {
  const name = document.getElementById("typewriter-text");
  const role = document.getElementById("typewriter-subtext");
  const nameText = "SARAH COLLINS";
  const roleText = "Full-Stack Web Developer";

  if (!name || !role) {
    return;
  }

  name.setAttribute("aria-label", nameText);
  role.setAttribute("aria-label", roleText);

  if (userPrefersReducedMotion()) {
    setTextPair(name, role, nameText, roleText);
    return;
  }

  name.textContent = "";
  role.textContent = "";

  await typeText(name, nameText, 115);
  await new Promise((resolve) => window.setTimeout(resolve, 300));
  await typeText(role, roleText, 70);
  role.classList.add("typing-complete");
}

function setupProfileTypewriter() {
  setTextPair(
    document.getElementById("profileTypingLine1"),
    document.getElementById("profileTypingLine2"),
    "SARAH COLLINS",
    "Full-Stack Web Developer",
  );
}

function createCaseStudyListItem(label, value) {
  const item = document.createElement("li");
  const strong = document.createElement("strong");
  strong.textContent = `${label}:`;
  item.append(strong, ` ${value}`);
  return item;
}

function populateModal(card, modalContent) {
  const title = card.getAttribute("data-title") || "Project case study";
  const desc = card.getAttribute("data-desc") || "";
  const img = card.querySelector(".card-image");
  const avatar = card.querySelector(".card-avatar");

  modalContent.replaceChildren();

  if (img) {
    const imageContainer = document.createElement("div");
    imageContainer.className = "card-image-container";

    const preview = document.createElement("img");
    preview.className = "card-image";
    preview.src = img.currentSrc || img.src;
    preview.alt = img.alt;
    preview.width = Number(img.getAttribute("width")) || 1400;
    preview.height = Number(img.getAttribute("height")) || 764;

    imageContainer.append(preview);

    if (avatar) {
      const avatarImage = document.createElement("img");
      avatarImage.className = "card-avatar";
      avatarImage.src = avatar.currentSrc || avatar.src;
      avatarImage.alt = "";
      avatarImage.setAttribute("aria-hidden", "true");
      avatarImage.width = Number(avatar.getAttribute("width")) || 320;
      avatarImage.height = Number(avatar.getAttribute("height")) || 320;
      imageContainer.append(avatarImage);
    }

    modalContent.append(imageContainer);
  }

  const heading = document.createElement("h2");
  heading.id = "modalTitle";
  heading.textContent = title;

  const summary = document.createElement("p");
  summary.textContent = desc;

  const list = document.createElement("ul");
  list.className = "case-study-list";
  list.append(
    createCaseStudyListItem("User problem", card.getAttribute("data-problem") || ""),
    createCaseStudyListItem("Target users", card.getAttribute("data-users") || ""),
    createCaseStudyListItem("UX decisions", card.getAttribute("data-decisions") || ""),
    createCaseStudyListItem("Accessibility", card.getAttribute("data-accessibility") || ""),
    createCaseStudyListItem("Testing evidence", card.getAttribute("data-testing") || ""),
    createCaseStudyListItem("Outcome", card.getAttribute("data-outcome") || ""),
  );

  modalContent.append(heading, summary, list);
}

function keepFocusInsideDialog(event, overlay) {
  const focusable = overlay.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );

  if (!focusable.length) {
    return;
  }

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

function setupCardModal() {
  const cards = document.querySelectorAll(".project-card");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const modalContent = document.getElementById("modalContent");
  let lastFocusedElement = null;

  if (!cards.length || !overlay || !closeBtn || !modalContent) {
    return;
  }

  function openModal(card, trigger) {
    lastFocusedElement = trigger;
    populateModal(card, modalContent);
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    trigger.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    document.querySelectorAll(".more-btn[aria-expanded]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  cards.forEach((card) => {
    const moreBtn = card.querySelector(".more-btn");
    if (!moreBtn) {
      return;
    }

    moreBtn.setAttribute("aria-expanded", "false");
    moreBtn.addEventListener("click", () => openModal(card, moreBtn));
  });

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("active")) {
      return;
    }

    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "Tab") {
      keepFocusInsideDialog(event, overlay);
    }
  });
}

function setupMotionToggle() {
  const video = document.getElementById("heroVideo");
  const button = document.getElementById("motionToggle");

  if (!video || !button) {
    return;
  }

  function setPausedState(isPaused) {
    button.textContent = isPaused ? "Play motion" : "Pause motion";
    button.setAttribute("aria-pressed", String(isPaused));
  }

  if (userPrefersReducedMotion()) {
    video.pause();
    setPausedState(true);
  } else {
    video.play().then(() => setPausedState(false)).catch(() => {
      setPausedState(true);
    });
  }

  button.addEventListener("click", () => {
    if (video.paused) {
      video.play().then(() => setPausedState(false)).catch(() => {
        button.textContent = "Motion unavailable";
      });
    } else {
      video.pause();
      setPausedState(true);
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const successClose = document.getElementById("successClose");

  if (!form || !successMessage) {
    return;
  }

  const fields = form.querySelectorAll("input, textarea");

  function updateFieldValidity(field) {
    field.setAttribute("aria-invalid", String(!field.validity.valid));
  }

  fields.forEach((field) => {
    field.setAttribute("aria-invalid", "false");
    field.addEventListener("input", () => updateFieldValidity(field));
    field.addEventListener("blur", () => updateFieldValidity(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      fields.forEach(updateFieldValidity);
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid && typeof firstInvalid.focus === "function") {
        firstInvalid.focus();
      }
      return;
    }

    successMessage.hidden = false;
    successMessage.classList.add("show");
    form.reset();
    fields.forEach((field) => field.setAttribute("aria-invalid", "false"));
    form.classList.remove("was-validated");
    successMessage.scrollIntoView({
      block: "center",
      behavior: userPrefersReducedMotion() ? "auto" : "smooth",
    });
    successMessage.focus({ preventScroll: true });
  });

  if (successClose) {
    successClose.addEventListener("click", () => {
      successMessage.hidden = true;
      successMessage.classList.remove("show");
    });
  }
}

function initializeApp() {
  setupHomeTypewriter();
  setupProfileTypewriter();
  setupCardModal();
  setupMotionToggle();
  setupContactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

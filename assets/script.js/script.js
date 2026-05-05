const textElement = document.getElementById("typewriter-text");
const subTextElement = document.getElementById("typewriter-subtext");
const typingSound = document.getElementById("typing-sound");

const mainText = ">_SARAH COLLINS";
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
  if (subIndex <= subText.length) {
    subTextElement.textContent = subText.substring(0, subIndex);
    subIndex++;
    playTypingSound();
    setTimeout(typeSubText, 90 + Math.random() * 60);
  } else {
    setTimeout(() => {
      // Clear and restart typing effect after a pause
      textElement.textContent = "";
      subTextElement.textContent = "";
      mainIndex = 0;
      subIndex = 0;
      setTimeout(typeMainText, 800);
    }, 1200);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  textElement.textContent = "";
  subTextElement.textContent = "";
  mainIndex = 0;
  subIndex = 0;
  typeMainText();
});
const cards = document.querySelectorAll('.card');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const modalContent = document.getElementById('modalContent');

// Open Card

cards.forEach(card => {
  // Card click (anywhere on card)
  card.addEventListener('click', (e) => {
    // Prevent double open if 'More' button is clicked
    if (e.target.classList.contains('more-btn')) return;
    expandCard(card);
  });
  // More button click
  const moreBtn = card.querySelector('.more-btn');
  if (moreBtn) {
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      expandCard(card);
    });
  }
});

function expandCard(card) {
  const title = card.getAttribute('data-title');
  const desc = card.getAttribute('data-desc');
  // Find the image and avatar from the clicked card
  const img = card.querySelector('.card-image');
  const avatar = card.querySelector('.card-avatar');
  const imgSrc = img ? img.src : '';
  const imgAlt = img ? img.alt : '';
  const avatarSrc = avatar ? avatar.src : '';
  const avatarAlt = avatar ? avatar.alt : '';

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

  overlay.classList.add('active');
}

// Close Card
if (closeBtn && overlay) {
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
}

// Close Card
closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});

// Close if user clicks background (outside the card)
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});
const textElement = document.getElementById("typewriter-text");
const typingSound = document.getElementById("typing-sound");

// Rotating phrases to showcase your skills dynamically
const phrases = ["> _ SARAH COLLINS "];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function playTypingSound() {
  if (!typingSound) return;
  typingSound.volume = 0.2; // Lowered volume so it's a subtle background click
  typingSound.currentTime = 0;

  // Browsers strictly block autoplaying audio without user interaction.
  // The catch block prevents your console from flooding with error messages.
  typingSound.play().catch(() => {});
}

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // Remove a character
    textElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // Add a character
    textElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    playTypingSound(); // Play sound only when typing, not when deleting
  }

  // Variable typing speeds: Deleting is faster than typing
  let typeSpeed = isDeleting ? 40 : 80;

  // Add slight randomization to typing speed for a realistic "human" feel
  if (!isDeleting) {
    typeSpeed += Math.random() * 50;
  }

  // State transitions
  if (!isDeleting && charIndex === currentPhrase.length) {
    // Finished typing: pause longer so the user can read it
    typeSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Finished deleting: pause briefly, then move to the next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typewriter-text");
  const typingSound = document.getElementById("typing-sound");
  if (!textElement) return;

  // Wait 1 second after page load before starting the typing effect
  setTimeout(typeEffect, 1000);

  const video = document.getElementById("hero-video");
  if (!video) return;

  video.muted = true;
  const tryPlay = () => video.play().catch(() => {});

  tryPlay();
  video.addEventListener("canplay", tryPlay);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
});

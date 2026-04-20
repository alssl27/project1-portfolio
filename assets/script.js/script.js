// The text you want to type
const lines = [
    "Hi,",
    "My name is Sarah Collins,",
    "I am a Fullstack Web Developer"
];

const speed = 75; // Typing speed in milliseconds
const delayBetweenLines = 500; // Pause before starting the next line
const delayBeforeRestart = 2000; // Pause before restarting the loop

let lineIndex = 0;
let charIndex = 0;
const textElement = document.getElementById("typewriter-text");

function typeWriter() {
    // Check if there are still lines left to type
    if (lineIndex < lines.length) {
        
        // Check if there are still characters left in the current line
        if (charIndex < lines[lineIndex].length) {
            textElement.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } 
        // Once a line is finished, move to the next one
        else {
            // Add a line break unless it's the very last line
            if (lineIndex < lines.length - 1) {
                textElement.innerHTML += "<br>";
            }
            lineIndex++;
            charIndex = 0;
            // Wait a moment before typing the next line
            setTimeout(typeWriter, delayBetweenLines);
        }
    } else {
        // All lines typed, restart the loop after a delay
        setTimeout(() => {
            textElement.innerHTML = '';
            lineIndex = 0;
            charIndex = 0;
            typeWriter();
        }, delayBeforeRestart);
    }
}

// Start the typing effect as soon as the window loads
window.onload = typeWriter;
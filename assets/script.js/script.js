// The text you want to type.
const lines = [
    // First line that appears in the loop.
    "Welcome to my Portfilio,",
    // Second line that appears in the loop.
    "My name is Sarah Collins,",
    // Third line that appears in the loop.
    "I am a Fullstack Web Developer"
];

// Delay between each typed character in milliseconds.
const speed = 75; // Typing speed in milliseconds
// Delay between each finished line.
const delayBetweenLines = 500; // Pause before starting the next line
// Delay before restarting the animation from the beginning.
const delayBeforeRestart = 2000; // Pause before restarting the loop

// Index of the current line being typed.
let lineIndex = 0;
// Index of the current character inside the line.
let charIndex = 0;
// The element that receives the typed text.
const textElement = document.getElementById("typewriter-text");

// Types the text one character at a time and loops through all lines.
function typeWriter() {
    // Check if there are still lines left to type.
    if (lineIndex < lines.length) {
        // Check if there are still characters left in the current line.
        if (charIndex < lines[lineIndex].length) {
            // Add the next character to the output.
            textElement.innerHTML += lines[lineIndex].charAt(charIndex);
            // Move to the next character.
            charIndex++;
            // Continue typing after the configured speed delay.
            setTimeout(typeWriter, speed);
        } 
        // Once a line is finished, move to the next one.
        else {
            // Add a line break unless it's the very last line.
            if (lineIndex < lines.length - 1) {
                // Insert the line break in the rendered text.
                textElement.innerHTML += "<br>";
            }
            // Advance to the next line.
            lineIndex++;
            // Reset the character index for the new line.
            charIndex = 0;
            // Wait before typing the next line.
            setTimeout(typeWriter, delayBetweenLines);
        }
    } else {
        // All lines typed, restart the loop after a delay.
        setTimeout(() => {
            // Clear the text before starting over.
            textElement.innerHTML = '';
            // Reset the line index.
            lineIndex = 0;
            // Reset the character index.
            charIndex = 0;
            // Start typing again from the beginning.
            typeWriter();
        }, delayBeforeRestart);
    }
}

// Start the typing effect as soon as the window loads.
window.onload = typeWriter;
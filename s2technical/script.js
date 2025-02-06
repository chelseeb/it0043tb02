let previousBox = null;

function showBox(day) {
    const buttonColor = getComputedStyle(document.querySelector(`.${day}`)).backgroundColor;

    // If there's a previous box, move it out of view and reset its state
    if (previousBox) {
        previousBox.style.transition = "top 1s ease-out, background-color 1s ease-out, border-width 1s ease-out"; // Slow transitions
        previousBox.style.top = "-700px"; // Move previous box up (out of view)
        previousBox.style.backgroundColor = previousBox.style.borderColor; // Restore solid color
        previousBox.style.borderWidth = "3px"; // Restore border width
    }

    // Create a new box
    const newBox = document.createElement("div");
    newBox.classList.add("color-box");

    // Set initial styles for the new box (larger size and slower transitions)
    newBox.style.position = "absolute";
    newBox.style.left = "50%";
    newBox.style.transform = "translateX(-50%)";
    newBox.style.marginLeft = "400px"; // Added left margin
    newBox.style.width = "700px"; // Increased size
    newBox.style.height = "600px"; // Increased size
    newBox.style.backgroundColor = buttonColor;
    newBox.style.border = `3px solid ${buttonColor}`;
    newBox.style.transition = "top 1s ease-out, background-color 1s ease-out, border-width 1s ease-out"; // Slower transitions
    newBox.style.top = "-400px"; // Start above the viewport (adjusted for larger box)

    document.body.appendChild(newBox);

    // Move the new box down
    setTimeout(() => {
        newBox.style.top = "30%";
    }, 100);

    // Fade the new box to border-only after it reaches the center
    setTimeout(() => {
        newBox.style.backgroundColor = "transparent"; // Fade to border-only
        newBox.style.borderWidth = "5px"; // Change border width
    }, 500); // Fade after the box has moved down

    // Set the new box as the previous box for the next time
    previousBox = newBox;
}

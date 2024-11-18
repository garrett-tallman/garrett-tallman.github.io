// Typewriter Effect
const nameText = "Garrett Tallman";
const titleText = "Product Manager";
let nameIndex = 0;
let titleIndex = 0;

function typeEffect(id, text, speed) {
    const element = document.getElementById(id);
    if (id === "name" && nameIndex < text.length) {
        element.innerHTML += text.charAt(nameIndex);
        nameIndex++;
        setTimeout(() => typeEffect(id, text, speed), speed);
    } else if (id === "title" && titleIndex < text.length) {
        element.innerHTML += text.charAt(titleIndex);
        titleIndex++;
        setTimeout(() => typeEffect(id, text, speed), speed);
    }
}

// Start Typing Animation
window.onload = () => {
    typeEffect("name", nameText, 85); // Type name at 100ms speed
    setTimeout(() => typeEffect("title", titleText, 100), nameText.length * 100 + 500); // Start title after name
};

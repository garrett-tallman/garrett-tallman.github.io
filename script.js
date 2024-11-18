// Typewriter Effect
const nameText = "Garrett Tallman";
const titleText = "Product Manager";
let nameIndex = 0;
let titleIndex = 0;

function typeEffect(id, text, speed, callback) {
    const element = document.getElementById(id);
    if (id === "name" && nameIndex < text.length) {
        element.innerHTML += text.charAt(nameIndex);
        nameIndex++;
        setTimeout(() => typeEffect(id, text, speed, callback), speed);
    } else if (id === "title" && titleIndex < text.length) {
        element.innerHTML += text.charAt(titleIndex);
        titleIndex++;
        setTimeout(() => typeEffect(id, text, speed, callback), speed);
    } else if (callback) {
        callback(); // Trigger the callback after the typing animation
    }
}

// Reveal Projects with Motion
function revealProjects() {
    const linksContainer = document.getElementById("links-container");
    linksContainer.classList.remove("hidden");
    linksContainer.classList.add("visible");
}

// Start Typing Animation
window.onload = () => {
    typeEffect("name", nameText, 85, () => {
        typeEffect("title", titleText, 85, revealProjects); // Reveal projects after title typing
    });
};
function typeEffect(id, text, speed, callback) {
    const element = document.getElementById(id);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeCharacter, speed);
        } else if (callback) {
            callback(); // Trigger callback when typing is complete
        }
    }

    typeCharacter();
}

function revealProjects() {
    const linksContainer = document.getElementById("links-container");
    linksContainer.classList.remove("hidden");
    linksContainer.classList.add("visible");
}

function applyEffectsForPage() {
    const currentPage = window.location.pathname;
    typeEffect("name", "Garrett Tallman", 85, revealProjects);
}

// Ensure animations start when the page is fully loaded
window.onload = applyEffectsForPage;

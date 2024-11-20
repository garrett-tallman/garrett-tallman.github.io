function typeEffect(id, text, speed) {
    const element = document.getElementById(id);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeCharacter, speed);
        } else if (callback) {
            const linksContainer = document.getElementById("links-container");
            linksContainer.classList.remove("hidden");
            linksContainer.classList.add("visible");
        }
    }

    typeCharacter();
}

function applyEffectsForPage() {
    const currentPage = window.location.pathname;
    typeEffect("name", "Garrett Tallman", 85, revealProjects);
}

// Ensure animations start when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
window.onload = applyEffectsForPage;


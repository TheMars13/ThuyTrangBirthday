const giftBox = document.getElementById("gift-box");
const popup = document.getElementById("popup");
const music = document.getElementById("birthday-music");

giftBox.addEventListener("click", () => {
    popup.style.display = "flex";
    giftBox.style.display = "none";
    music.play();
});

function createConfetti() {
    const container = document.getElementById("confetti-container");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Random position and color
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        confetti.style.width = confetti.style.height = Math.random() * 8 + 4 + "px";

        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => confetti.remove(), 50000);
    }
}

giftBox.addEventListener("click", () => {
    popup.style.display = "flex";
    giftBox.style.display = "none";
    music.play();
    createConfetti(); // Add confetti
});

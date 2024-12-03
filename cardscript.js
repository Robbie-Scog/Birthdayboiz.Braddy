// Make the card openable
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    if (card) {
        card.addEventListener("click", () => {
            card.classList.toggle("open");
            console.log(card.classList.contains("open") ? "Card is open" : "Card is closed");
        });
    }
});

function hideFakeStar() {
    const fakeStar = document.querySelector("#fake-star");
    if (fakeStar) {
        fakeStar.style.display = "none";  // Hides the fake star
    }
}

function redirectToFlower() {
    window.location.href = "flower.html";
}

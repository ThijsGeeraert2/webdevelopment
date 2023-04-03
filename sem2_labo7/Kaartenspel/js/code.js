let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
}

const images = ["aap","hert","hond","kat","meeuw","zwaan"];
const cards = document.querySelectorAll('.memory-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

const setup = () => {

}

window.addEventListener("load",setup);


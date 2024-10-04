document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.style.transition = "all 1s ease";
    header.style.transform = "scale(1.1)";

    setTimeout(() => {
        header.style.transform = "scale(1)";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.from("header", { duration: 1.5, y: -100, opacity: 0, ease: "bounce" });
    gsap.from("section", { duration: 1.5, x: -200, opacity: 0, stagger: 0.3 });
});

document.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        createNeonFlowers();
    }
});

function createNeonFlowers() {
    for (let i = 0; i < 10; i++) {
        let flower = document.createElement('div');
        flower.classList.add('neon-flower');
        
        // Posicionamento aleatório na tela
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.top = (window.scrollY + Math.random() * 50) + "px";

        document.body.appendChild(flower);

        // Remover as flores após algum tempo
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}

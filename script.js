const rain = document.querySelector(".rain");
const characters = "0123456789@#$%^&*(){}[]<>?/\\|~+=-.ANWESHASANTRAABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function randomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}
function createDrop() {
    const drop = document.createElement("span");
    drop.classList.add("drop");
    drop.textContent = randomCharacter();
    const left = Math.random() * 220;
    const size = Math.random() * 12 + 10;
    const duration = Math.random() * 1.2 + 0.6;
    const delay = Math.random() * 0.5;
    drop.style.left = left + "px";
    drop.style.fontSize = size + "px";
    drop.style.animationDuration = duration + "s";
    drop.style.animationDelay = delay + "s";
    rain.appendChild(drop);
    setTimeout(() => {
        drop.remove();
    }, (duration + delay) * 1000);
}
setInterval(createDrop, 45); 
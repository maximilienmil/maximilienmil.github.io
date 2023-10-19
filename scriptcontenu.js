const matrixContainer = document.getElementById("matrix-container");

function createMatrixCharacter() {
    const matrixCharacter = document.createElement("span");
    matrixCharacter.textContent = getRandomMatrixCharacter();
    matrixCharacter.style.left = `${getRandomNumber(0, 100)}%`;
    matrixCharacter.style.animationDuration = `${getRandomNumber(2, 6)}s`;
    matrixCharacter.style.animationDelay = `${getRandomNumber(0, 4)}s`;
    matrixCharacter.style.fontSize = `${getRandomNumber(10, 30)}px`;
    matrixCharacter.style.opacity = `${getRandomNumber(0.4, 1)}`;
    matrixCharacter.classList.add("matrix");
    matrixContainer.appendChild(matrixCharacter);
    matrixCharacter.addEventListener("animationiteration", () => {
        matrixContainer.removeChild(matrixCharacter);
    });
}

function getRandomMatrixCharacter() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return characters[Math.floor(Math.random() * characters.length)];
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(createMatrixCharacter, 100);

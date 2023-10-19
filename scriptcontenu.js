const matrixContainer = document.querySelector('.matrix-container');

function createMatrixCharacter() {
    const matrixCharacter = document.createElement('span');
    matrixCharacter.textContent = getRandomMatrixCharacter();
    matrixCharacter.style.left = `${Math.random() * 100}%`;
    matrixContainer.appendChild(matrixCharacter);
    setTimeout(() => {
        matrixCharacter.remove();
    }, 4000);
}

function getRandomMatrixCharacter() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return characters[Math.floor(Math.random() * characters.length)];
}

setInterval(createMatrixCharacter, 150);

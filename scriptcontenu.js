const matrixContainer = document.getElementById("matrix-container");
const numColumns = 10; // Number of columns
const columnWidth = 5; // Width of each column in percentage

for (let i = 0; i < numColumns; i++) {
    const column = document.createElement("div");
    column.classList.add("matrix-column");
    column.style.width = `${columnWidth}%`;

    matrixContainer.appendChild(column);
}

function createMatrixCharacter() {
    const columns = document.querySelectorAll(".matrix-column");
    columns.forEach((column) => {
        const matrixCharacter = document.createElement("span");
        matrixCharacter.textContent = getRandomMatrixCharacter();
        matrixCharacter.style.left = `${getRandomNumber(0, 100)}%`;
        matrixCharacter.style.animationDuration = `${getRandomNumber(5, 15)}s`;
        matrixCharacter.style.animationDelay = `${getRandomNumber(0, 10)}s`;
        matrixCharacter.style.fontSize = `${getRandomNumber(10, 30)}px`;
        matrixCharacter.style.opacity = `${getRandomNumber(0.4, 1)}`;
        matrixCharacter.classList.add("matrix");
        column.appendChild(matrixCharacter);
        matrixCharacter.addEventListener("animationiteration", () => {
            column.removeChild(matrixCharacter);
        });
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

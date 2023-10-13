// convertisseurbinaire.js
function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalOutput = document.getElementById('decimalOutput');
    decimalOutput.textContent = parseInt(binaryInput, 2);
}

function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
    binaryOutput.textContent = (parseInt(decimalInput)).toString(2);
}

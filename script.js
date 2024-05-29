function isValidHex(value) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(value);
}

function isValidRGB(value) {
    return Number.isInteger(value) && value >= 0 && value <= 255;
}

function hexToRGB(hex) {
    if (!isValidHex(hex)) {
        return "Código hexadecimal inválido.";
    }

    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
        cleanHex = cleanHex.split('').map(char => char + char).join('');
    }

    let bigint = parseInt(cleanHex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
}

function rgbToHex(r, g, b) {
    if (!isValidRGB(r) || !isValidRGB(g) || !isValidRGB(b)) {
        return "Código RGB inválido.";
    }

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const resultDiv = document.getElementById('hexToRgbResult');
    const result = hexToRGB(hexInput);
    resultDiv.textContent = result;
    resultDiv.className = isValidHex(hexInput) ? 'result' : 'result error';
}

function convertRgbToHex() {
    const r = parseInt(document.getElementById('rInput').value, 10);
    const g = parseInt(document.getElementById('gInput').value, 10);
    const b = parseInt(document.getElementById('bInput').value, 10);
    const resultDiv = document.getElementById('rgbToHexResult');
    const result = rgbToHex(r, g, b);
    resultDiv.textContent = result;
    resultDiv.className = (isValidRGB(r) && isValidRGB(g) && isValidRGB(b)) ? 'result' : 'result error';
}
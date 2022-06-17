let getValue = (input) => input.value;
let clearInput = (input) => input.value = "";

function splitText(text, separator) {
    let arraySplit = text.split(separator);
    return arraySplit;
}

function concatArray(array) {
    let newText = array.join("");
    return newText;
}

export { getValue, clearInput, splitText, concatArray };
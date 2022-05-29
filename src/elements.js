const userInput = document.querySelector("#user-input");
const userOutput = document.querySelector("#user-output");
const encryptBtn = document.querySelector("#text-encrypt");
const decryptBtn = document.querySelector("#text-decrypt");
const warnDisplay = document.querySelector("#warning");
const outputBanner = document.querySelector(".banner-container");
const warningBar = document.querySelector("#warning span");
const copyBtn = document.querySelector("#copy-text");

let removeWarning = () => warnDisplay.classList.remove("pulse-warn");
let addWarning = () => warnDisplay.classList.add("pulse-warn");
let addWarningBar = () => warningBar.classList.add("warning-bar");
let removeWarningBar = () => warningBar.classList.remove("warning-bar");

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

function checkText(elem, content) {
    if (content.match(blockParameter)) {
        elem.value = "Você inseriu caracteres inválidos, corrija seu texto!";
        addWarning();
        setTimeout(addWarningBar, 200)
    } else {
        elem.value = content;
    }

    setTimeout(removeWarning, 1000);
    setTimeout(removeWarningBar, 1200);
}

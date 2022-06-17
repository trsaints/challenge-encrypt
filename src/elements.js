const userInput = document.querySelector("#user-input");
const userOutput = document.querySelector("#user-output");
const encryptBtn = document.querySelector("#text-encrypt");
const decryptBtn = document.querySelector("#text-decrypt");
const warnDisplay = document.querySelector("#warning");
const outputBanner = document.querySelector(".banner-container");
const warningBar = document.querySelector("#warning span");
const copyBtn = document.querySelector("#copy-text");
const clipboard = navigator.clipboard;

export {
  userInput,
  userOutput,
  encryptBtn,
  decryptBtn,
  warnDisplay,
  warningBar,
  outputBanner,
  copyBtn,
  clipboard
};

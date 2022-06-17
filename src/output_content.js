import { blockParameter } from "./encript_text.js"
import { warnDisplay, warningBar, outputBanner, userOutput } from "./elements.js";
import { getValue } from "./base_functions.js"

let removeWarning = () => warnDisplay.classList.remove("pulse-warn");
let addWarning = () => warnDisplay.classList.add("pulse-warn");

let addWarningBar = () => warningBar.classList.add("warning-bar");
let removeWarningBar = () => warningBar.classList.remove("warning-bar");

function hideBanner() {
  let outputText = getValue(userOutput);
  if (outputText !== "") {
    outputBanner.classList.add("hidden");
  } else {
    outputBanner.classList.remove("hidden");
  }
}

function warnClipboard() {
  const copyWarn = document.querySelector(".clipboard-warn");
  let showCopyWarn = () => copyWarn.classList.add("typed-out");
  let hideCopyWarn = () => copyWarn.classList.remove("typed-out");
  let isHidden = copyWarn.classList.contains("hidden");

  if (isHidden) {
    copyWarn.classList.remove("hidden");
  }

  showCopyWarn();
  setTimeout(hideCopyWarn, 2000);
}

function checkText(elem, content) {
  if (content.match(blockParameter)) {
    elem.value = "Você inseriu caracteres inválidos, corrija seu texto!";
    addWarning();
    setTimeout(addWarningBar, 200);
  } else {
    elem.value = content;
  }

  setTimeout(removeWarning, 1000);
  setTimeout(removeWarningBar, 1200);
}

export {
  warnClipboard,
  checkText,
  hideBanner,
};

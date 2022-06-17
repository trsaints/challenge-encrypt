import {
  encryptBtn,
  decryptBtn,
  copyBtn,
} from "./elements.js";

import {
  warnClipboard,
  hideBanner
} from "./output_content.js";

import {
  encryptText,
  decryptText
} from "./encript_text.js"

import { copyText } from "./copy_text.js"

encryptBtn.addEventListener("click", encryptText);
decryptBtn.addEventListener("click", decryptText);
encryptBtn.addEventListener("click", hideBanner);
decryptBtn.addEventListener("click", hideBanner);
copyBtn.addEventListener("click", warnClipboard);
copyBtn.addEventListener("click", copyText);

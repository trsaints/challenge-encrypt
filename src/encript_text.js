import { userInput, userOutput } from "./elements.js";
import { getValue, splitText, concatArray, clearInput } from "./base_functions.js";
import { checkText } from "./output_content.js";

const splitParameter1 = /(a|e|i|o|u)/g;
const splitParameter2 = /(ai|enter|imes|ober|ufat)/g;
const blockParameter =
  /!|#|@|%|¨|&|\*|\(|\)|-|\+|=|`|'|"|'|\{|\}|\||\\|;|\/|_|\[|\]|\^|\~|<|>|:|\$|¬|─|\d/g;

function replaceArray(array, type) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (type === "encryption") {
      switch (array[i]) {
        case "a":
          array[i] = array[i].replace("a", "ai");
          break;

        case "e":
          array[i] = array[i].replace("e", "enter");
          break;

        case "i":
          array[i] = array[i].replace("i", "imes");
          break;

        case "o":
          array[i] = array[i].replace("o", "ober");
          break;

        case "u":
          array[i] = array[i].replace("u", "ufat");
          break;

        default:
          array[i] = array[i];
      }
    } else if (type === "decryption") {
      switch (array[i]) {
        case "ai":
          array[i] = array[i].replace("ai", "a");
          break;

        case "enter":
          array[i] = array[i].replace("enter", "e");
          break;

        case "imes":
          array[i] = array[i].replace("imes", "i");
          break;

        case "ober":
          array[i] = array[i].replace("ober", "o");
          break;

        case "ufat":
          array[i] = array[i].replace("ufat", "u");
          break;

        default:
          array[i] = array[i];
      }
    }

    newArray.push(array[i]);
  }

  return newArray;
}

function encryptText() {
  userOutput.value = "";

  let inputText = getValue(userInput);
  let textArray = splitText(inputText, splitParameter1);
  let replacedArray = replaceArray(textArray, "encryption");
  let outputText = concatArray(replacedArray);
  checkText(userOutput, outputText);
  clearInput(userInput);
}

function decryptText() {
  userOutput.value = "";

  let inputText = getValue(userInput);
  let textArray = splitText(inputText, splitParameter2);
  let replacedArray = replaceArray(textArray, "decryption");
  let outputText = concatArray(replacedArray);
  checkText(userOutput, outputText);
  clearInput(userInput);
}

export { blockParameter, encryptText, decryptText };

const clipboard = navigator.clipboard;
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
        console.log("Write access ranted!");
    }
});

navigator.permissions.query({ name: "clipboard-read" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
        console.log("Read access ranted!");
    }
});

function copyText() {
    userInput.focus();

    let copyText = getValue(userOutput);

    clipboard.writeText(copyText).then(() => {
        console.log("Copied to clipboard");
    });
}

copyBtn.addEventListener("click", copyText);
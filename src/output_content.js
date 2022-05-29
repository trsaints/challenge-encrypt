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

encryptBtn.addEventListener("click", hideBanner);
decryptBtn.addEventListener("click", hideBanner);
copyBtn.addEventListener("click", warnClipboard);
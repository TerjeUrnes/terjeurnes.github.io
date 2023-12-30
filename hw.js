document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "interactive") {
        initHelloWorld();
    }
});

function initHelloWorld() {
    const hwDiv = document.getElementById("hw-field");
    const hwInput = document.getElementById("hw-input");
    hwInput.addEventListener("input", (e) => {
        hwDiv.innerText = hwInput.value;
    });

    hwDiv.innerText = hwInput.value;
}
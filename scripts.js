function generatePlaceholder() {
    const words = ["purple-platypus", "orange-octopus", "green-giraffe", "blue-butterfly"];
    return words[Math.floor(Math.random() * words.length)];
}

const keyInput = document.getElementById("key-input");
const placeholderText = generatePlaceholder();
keyInput.placeholder = `Enter "${placeholderText}"`;

keyInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const inputValue = keyInput.value.trim();
        const responseMessage = document.getElementById("response-message");
        const keyDiv = document.querySelector(".key");
        const contentDiv = document.querySelector(".content");

        if (inputValue === placeholderText) {
            responseMessage.textContent = "Correct! Access granted.";
            responseMessage.style.color = "lime";
            keyDiv.style.display = "none";
            contentDiv.style.display = "flex";
        } else {
            responseMessage.textContent = "Incorrect! Try again.";
            responseMessage.style.color = "red";
        }
    }
});

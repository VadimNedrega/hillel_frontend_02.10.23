// ********** Strict mode **********
"use strict";

const defaultCount = 0;

// noinspection NonAsciiCharacters
const emojis = {
    "😥": defaultCount,
    "😒": defaultCount,
    "🙎": defaultCount,
    "😏": defaultCount,
    "😊": defaultCount
};

function displayResults() {
    const table = document.createElement("table");
    table.id = "results";
    table.style.width = "100%";
    document.body.insertAdjacentElement("beforeend", table);

    const row = table.insertRow();

    Object.keys(emojis).forEach(emoji => {
        const size = "4em";
        const emojiCell = row.insertCell();
        const emojiContainer = document.createElement("div");
        emojiContainer.style.textAlign = "center";

        const emojiElement = document.createElement("span");
        emojiElement.textContent = emoji;
        emojiElement.style.fontSize = size;
        emojiElement.onclick = () => {
            emojis[emoji]++;
            updateCount();
        };

        const countElement = document.createElement("span");
        countElement.style.fontSize = size;
        countElement.textContent = emojis[emoji];

        emojiContainer.insertAdjacentElement("beforeend",emojiElement);
        emojiContainer.insertAdjacentElement("beforeend",document.createElement("br"));
        emojiContainer.insertAdjacentElement("beforeend",countElement);
        emojiCell.insertAdjacentElement("beforeend",emojiContainer);
    });
}

function updateCount() {
    const countList = document.querySelectorAll("#results span:last-child");

    countList.forEach((count, index) => {
        count.textContent = emojis[Object.keys(emojis)[index]];
    });
}

displayResults();


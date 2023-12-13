// ********** Strict mode **********
"use strict";

const imagesFolder = "../HW_22/images";
const images = new Array(9).fill(null);

for (let i = 1; i <= images.length; i++) {
    images[i - 1] = `${i}.jpg`;
}

let currentIndex = 0;
const imageElements = [];

const imageContainer = document.createElement("div");
setContainerStyle(imageContainer);

document.body.insertAdjacentElement("beforeend", imageContainer);

images.forEach((imageName, index) => {
    const imageWrapper = document.createElement("div");
    setImageWrapperStyle(imageWrapper);

    imageContainer.insertAdjacentElement("beforeend", imageWrapper);

    const image = document.createElement("img");
    image.src = `${imagesFolder}/${imageName}`;
    image.style.width = "100%";
    image.style.height = "100%";
    image.onload = () => {
        if (index === 0) {
            imageWrapper.style.display = "block";
        }
    };

    imageWrapper.insertAdjacentElement("beforeend", image);

    const prevButton = createButton("Prev", () => showImage(currentIndex - 1));
    const nextButton = createButton("Next", () => showImage(currentIndex + 1));

    imageWrapper.insertAdjacentElement("beforeend", prevButton);
    imageWrapper.insertAdjacentElement("beforeend", nextButton);

    imageElements.push(imageWrapper);
});


function showImage(index) {
    if (index >= 0 && index < images.length) {
        imageElements[currentIndex].style.display = "none";
        currentIndex = index;
        imageElements[currentIndex].style.display = "block";

        const buttons = imageElements[currentIndex].getElementsByTagName("button");

        if (buttons.length > 0) {
            buttons[0].style.display = currentIndex === 0 ? "none" : "block";
            buttons[1].style.display = currentIndex === images.length - 1 ? "none" : "block";

            setButtonStyle(buttons[0], true);
            setButtonStyle(buttons[1], false);
        }
    }
}

function createButton(label, onclick) {
    const button = document.createElement("button");
    button.textContent = label;
    button.onclick = onclick;
    return button;
}

function setButtonStyle(button, isPrev) {
    button.style.position = "absolute";
    button.style.top = "50%";
    button.style.transform = "translateY(-50%)";
    button.style.color = "white";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.backgroundColor = "blue";
    isPrev ? button.style.left = "10px" : button.style.right = "10px";
}

function setContainerStyle(container) {
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100vh";
}

function setImageWrapperStyle(imageWrapper) {
    imageWrapper.style.position = "relative";
    imageWrapper.style.width = "500px";
    imageWrapper.style.height = "300px";
    imageWrapper.style.display = "none";
}

showImage(currentIndex);
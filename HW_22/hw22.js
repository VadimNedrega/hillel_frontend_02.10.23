// ********** Strict mode **********
"use strict";

const imagesFolder = 'images';
const images = new Array(9).fill(null);

for (let i = 1; i < 10; i++){
    const imageName = i + ".jpg";
    let randomNumber = Math.floor(Math.random() * images.length);

    while (images[randomNumber] !== null) {
        randomNumber = Math.floor(Math.random() * images.length);
    }

    images[randomNumber] = imageName;
}

images.forEach(imageName => {
    const img = document.createElement('img');
    img.src = `${imagesFolder}/${imageName}`;
    img.style.margin = "0 auto";
    img.style.width = '33%';
    img.style.tableLayout = "fixed";
    img.style.height = '300px';
    img.style.boxSizing = 'border-box';
    document.body.insertAdjacentElement("beforebegin", img);
})






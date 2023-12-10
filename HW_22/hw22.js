// ********** Strict mode **********
"use strict";

const imagesFolder = 'images';
const images = new Array(9).fill(null);

for (let i = 1; i < images.length + 1; i++) {
    const imageName = i + ".jpg";
    let randomNumber = Math.floor(Math.random() * images.length);

    while (images[randomNumber] !== null) {
        randomNumber = Math.floor(Math.random() * images.length);
    }

    images[randomNumber] = imageName;
}

const ul = document.createElement('ul');

images.forEach(imageName => {
    const img = document.createElement('img');
    const li = document.createElement('li');
    img.src = `${imagesFolder}/${imageName}`;
    img.style.margin = "0 auto";
    img.style.width = '33%';
    img.style.tableLayout = "fixed";
    img.style.height = '300px';
    img.style.boxSizing = 'border-box';

    li.insertAdjacentElement("afterbegin", img);
    ul.insertAdjacentElement("afterbegin", li);
})

document.body.insertAdjacentElement("afterbegin", ul);






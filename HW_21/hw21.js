// ********** Strict mode **********
"use strict";

document.body.style.backgroundColor = 'rgba(199, 241, 253, 0.75)';

const htmlHeadingElement = document.createElement("h1");
htmlHeadingElement.textContent = "Multiplication table";
htmlHeadingElement.style.fontWeight = 900;
htmlHeadingElement.style.color = 'rgba(13, 15, 13, 1)';
htmlHeadingElement.style.textAlign = "center";

document.body.insertAdjacentElement("beforebegin", htmlHeadingElement);

const table = document.createElement("table");
const cellLength = "350px";
table.setAttribute("id", "multiplyTable");

const tableStyle = {
    margin : "0 auto",
    border : "1.5px solid black",
    width : cellLength,
    height : cellLength,
    tableLayout : "fixed",
    borderCollapse : "collapse",
    backgroundColor : "black",
    color : "white",
}

Object.keys(tableStyle).forEach(key => table.style[key] = tableStyle[key]);

document.body.insertAdjacentElement("afterbegin", table);

for (let i = 0; i <= 10; i++){
    const row = table.insertRow();
    row.style.border = "1px solid white";

    for (let j = 0; j <= 10; j++) {
        const cell = row.insertCell();
        cell.style.border = "1px solid white";
        cell.style.textAlign = "center";

        if (i === j && i === 0) {
            cell.textContent = "";
        } else if (i === 0){
            cell.textContent = j;
        } else if (j === 0){
            cell.textContent = i;
        } else {
            cell.textContent = i * j;
        }

        cell.animate(
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.2)' },
                { transform: 'scale(1)' }
            ],
            {
                duration: 1000,
                iterations: 5
            }
        );
    }
}


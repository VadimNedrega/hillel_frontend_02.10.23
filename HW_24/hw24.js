// ********** Strict mode **********
"use strict";


class Container {
    initialElements;
    containerList;

    constructor(initialElements) {
        this.initialElements = initialElements;
        this.containerList = [];
    }

    containerStyle = {
        float: "left",
        height: "100vh",
    }

    fillContainerList = () => {
        for (let i = 0; i < this.initialElements; i++) {
            const container = document.createElement("div");
            this.containerList.push(container);
        }

        return this.containerList;
    }

    setStyle = () => Object.keys(this.containerStyle).forEach(key => {
        const width = `${100 / this.initialElements}%`;

        for (const container of this.containerList) {
            container.style.width = width;
            container.style[key] = this.containerStyle[key];
            document.body.insertAdjacentElement("beforeend", container);
        }
    });

    getContainerList = () => {
        this.fillContainerList();
        this.setStyle();
        return this.containerList;
    }
}

class Product {
    name;
    description;

    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

class Category {
    static NAME = {
        PHONES: "Phones",
        DRINKS: "Drinks",
        CLOSES: "Closes",
    }
}

class Notification {
    constructor() {
        this.notification = document.createElement("div");
        this.notification.style.position = "fixed";
        this.notification.style.top = "50%";
        this.notification.style.left = "50%";
        this.notification.style.transform = "translate(-50%, -50%)";
        this.notification.style.backgroundColor = "#9fe7e3";
        this.notification.style.border = "1px solid #ccc";
        this.notification.style.padding = "20px";
        this.notification.style.display = "none";
        document.body.insertAdjacentElement("afterbegin", this.notification);
    }

    show(message, duration = 5000) {
        this.notification.textContent = message;
        this.notification.style.display = "block";

        setTimeout(() => {
            this.hide();
        }, duration);
    }

    hide() {
        this.notification.style.display = "none";
        removeAllChildren(containerList[1]);
        removeAllChildren(containerList[2]);
    }
}

const containerList = new Container(3).getContainerList();

const productsByCategory = {
    [Category.NAME.PHONES] : [
        new Product("HTC P50", "Description for HTC P50"),
        new Product("Nokia 1100", "Description for Nokia 1100"),
        new Product("Motorola Razer V3", "Description for Motorola Razer V3"),
    ],
    [Category.NAME.DRINKS] : [
        new Product("Coffee", "Coffee with milk"),
        new Product("Blood Mary", "Description for Blood Mary"),
        new Product("Booze", "The best home booze in the World"),
    ],
    [Category.NAME.CLOSES] : [
        new Product("T-short", "Casual t-short"),
        new Product("Jacket", "Jacket for disco"),
        new Product("Socks", "Socks from grandmother"),
    ],
};

function removeAllChildren (container){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function createButton(text, callback) {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.margin = "10px";
    button.addEventListener("click", callback);
    return button;
}

function createProductList(products) {
    const productList = document.createElement("ul");
    products.forEach(product => {
        const productItem = document.createElement("li");
        const productButton = createButton(product.name, () => {
            const productInfo = document.createElement("div");
            const productName = document.createElement("h3");
            const productDescription = document.createElement("p");
            const buyButton = createButton("Купити", () => {
                new Notification().show(`Congratulation! You bought: ${product.name}`, 2000);
            });

            productName.textContent = product.name;
            productDescription.textContent = product.description;

            productInfo.insertAdjacentElement("afterbegin", productDescription);
            productInfo.insertAdjacentElement("afterbegin", productName);
            productInfo.insertAdjacentElement("beforeend", buyButton);

            removeAllChildren(containerList.at(2));
            containerList.at(2).insertAdjacentElement("beforeend", productInfo);
        });
        productItem.insertAdjacentElement("afterbegin", productButton);
        productList.insertAdjacentElement("afterbegin", productItem);
    });
    return productList;
}

function createCategoryList(categories) {
    const categoryList = document.createElement("ul");
    categories.forEach(category => {
        const listItem = document.createElement("li");
        const categoryButton = createButton(category, () => {
            const products = productsByCategory[category];
            const productList = createProductList(products);
            removeAllChildren(containerList.at(1));
            containerList.at(1).insertAdjacentElement("afterbegin", productList);
        });
        listItem.insertAdjacentElement("afterbegin", categoryButton);
        categoryList.insertAdjacentElement("afterbegin", listItem);
    });
    return categoryList;
}

const categories = Object.keys(productsByCategory);
const categoryList = createCategoryList(categories);
containerList.at(0).insertAdjacentElement("afterbegin", categoryList);
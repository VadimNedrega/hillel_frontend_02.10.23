// ********** Strict mode **********
"use strict";

const containerStyle = {
    float: "left",
    height: "100vh",
}

class Container {
    initialElements;
    containerList;

    constructor(initialElements, containerStyle) {
        this.initialElements = initialElements;
        this.containerList = [];
        this.fillContainerList();
        this.setStyle(containerStyle);
    }

    fillContainerList() {
        for (let i = 0; i < this.initialElements; i++) {
            const container = document.createElement("div");
            this.containerList.push(container);
        }
        return this.containerList;
    }

    setStyle(containerStyle) {
        Object.keys(containerStyle).forEach(key => {
            const width = `${100 / this.initialElements}%`;

            for (const container of this.containerList) {
                container.style.width = width;
                container.style[key] = containerStyle[key];
                document.body.insertAdjacentElement("beforeend", container);
            }
        });
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
    constructor(containerList, content, container = document.body) {
        this.notification = document.createElement("div");
        this.notification.classList.add("notification");
        this.notification.textContent = content;
        this.container = container;
        this.containerList = containerList;
        this.init(content);
    }

    init(content) {
        this.notification.style.position = "fixed";
        this.notification.style.top = "70%";
        this.notification.style.left = "50%";

        if (typeof content === "object"){
            this.notification.style.backgroundColor = "#daf3f1";
            this.notification.style.transform = "translate(-50%, -50%)";
        } else {
            this.notification.style.top = "70%";
            this.notification.style.left = "50%";
            this.notification.style.transform = "translate(-50%, -50%)";
            this.notification.style.backgroundColor = "#e7889f";
            this.notification.style.border = "1px solid #ccc";
            this.notification.style.padding = "20px";
            this.notification.style.display = "none";
        }

        this.notification.style.whiteSpace = "pre-line";
        this.container.insertAdjacentElement("afterbegin", this.notification);
    }

    show(showContent, duration = 5000, hideContent) {
        if (typeof showContent === 'object' && showContent !== null) {
            let contentText = '';
            for (const key in showContent) {
                if (showContent.hasOwnProperty(key)) {
                    contentText += `${key} ${showContent[key]}\n`;
                }
            }
            this.notification.textContent = contentText;
        } else {
            this.notification.textContent = showContent;
        }

        this.notification.style.display = "block";

        setTimeout(() => {
            this.hide(hideContent);
        }, duration);
    }

    hide(content) {
        this.notification.style.display = "none";
        this.notification.textContent = "";
        Array.isArray(content) ? content.forEach(el => removeAllChildren(el)) : removeAllChildren(content);
    }
}

const container = new Container(3, containerStyle);

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

function onClickHandler(product, containerList) {
    return function() {
        const productInfo = document.createElement("div");
        const productName = document.createElement("h3");
        const productDescription = document.createElement("p");
        const buyButton = createButton("Купити", () => {
            const orderForm = initOrderForm(product, containerList);
            containerList[2].insertAdjacentElement("beforeend", orderForm);
        });

        productName.textContent = product.name;
        productDescription.textContent = product.description;

        productInfo.insertAdjacentElement("afterbegin", productDescription);
        productInfo.insertAdjacentElement("afterbegin", productName);
        productInfo.insertAdjacentElement("beforeend", buyButton);

        removeAllChildren(containerList.at(2));
        containerList.at(2).insertAdjacentElement("beforeend", productInfo);
    };
}

function createProductList(products, containerList) {
    const productList = document.createElement("ul");
    products.forEach(product => {
        const productItem = document.createElement("li");
        const productButton = createButton(product.name, onClickHandler(product, containerList));
        productItem.insertAdjacentElement("afterbegin", productButton);
        productList.insertAdjacentElement("afterbegin", productItem);
    });
    return productList;
}

function createCategoryList(categories, containerList) {
    const fragment = document.createDocumentFragment();

    categories.forEach(category => {
        const listItem = document.createElement("li");
        const categoryButton = createButton(category, () => {
            const products = productsByCategory[category];
            const productList = createProductList(products, containerList);
            removeAllChildren(containerList.at(1));
            containerList.at(1).insertAdjacentElement("afterbegin", productList);
        });
        listItem.insertAdjacentElement("afterbegin", categoryButton);
        fragment.appendChild(listItem);
    });

    const categoryList = document.createElement("ul");
    categoryList.appendChild(fragment);

    return categoryList;
}

const categories = Object.keys(productsByCategory);
const categoryList = createCategoryList(categories, container.containerList);
container.containerList.at(0).insertAdjacentElement("afterbegin", categoryList);
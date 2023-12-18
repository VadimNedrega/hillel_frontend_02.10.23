// ********** Strict mode **********
"use strict";

let formData = {};
function updateFormData(key, value) {
    formData[key] = value;
}

function createNameLabel() {
    const nameLabel =  document.createElement("label");
    nameLabel.textContent = "ПІБ покупця: ";

    return nameLabel;
}

function createNameInput(nameLabel) {
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("required", true);

    nameInput.addEventListener("input", function () {
        updateFormData(nameLabel.textContent, this.value);
    });

    return nameInput;
}

function createCitySelect() {
    const citySelect = document.createElement("select");
    citySelect.setAttribute("required", true);

    const cities = ["Київ", "Львів", "Одеса", "Дніпро"];

    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
    });

    updateFormData("Місто: ", cities[0]);

    citySelect.addEventListener("change", function () {
        updateFormData("Місто: ", this.value);
    });

    return citySelect;
}

function createPostOfficeLabel() {
    const postOfficeLabel = document.createElement("label");
    postOfficeLabel.textContent = "Склад Нової пошти для надсилання: ";

    return postOfficeLabel;
}

function createPostOfficeInput(postOfficeLabel) {
    const postOfficeInput = document.createElement("input");
    postOfficeInput.setAttribute("type", "text");
    postOfficeInput.setAttribute("required", true);

    postOfficeInput.addEventListener("input", function () {
        updateFormData(postOfficeLabel.textContent, this.value);
    });

    return postOfficeInput;
}

function createPaymentLabelSelect() {
    const paymentLabelSelect = document.createElement("select");
    paymentLabelSelect.setAttribute("required", true);
    const payments = ["Післяплата", "Оплата банківською карткою"];
    payments.forEach(payment => {
        const option = document.createElement("option");
        option.value = payment;
        option.text = payment;
        paymentLabelSelect.appendChild(option);
    });

    updateFormData("Спосіб оплати: ", payments[0]);

    paymentLabelSelect.addEventListener("change", function () {
        updateFormData("Спосіб оплати: ", this.value);
    });

    return paymentLabelSelect;
}

function createQuantityLabel() {
    const quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Кількість продукції, що купується: ";

    return quantityLabel;
}

function createQuantityInput(quantityLabel) {
    const quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("required", true);
    quantityInput.setAttribute("value", 1);

    updateFormData(quantityLabel.textContent, 1);

    quantityInput.addEventListener("input", function () {
        updateFormData(quantityLabel.textContent, this.value);
    });

    return quantityInput;
}

function createCommentLabel() {
    const commentLabel = document.createElement("label");
    commentLabel.textContent = "Коментар до замовлення: ";

    return commentLabel;
}

function createCommentInput(commentLabel) {
    const commentInput = document.createElement("textarea");

    commentInput.addEventListener("input", function () {
        updateFormData(commentLabel.textContent, this.value);
    });

    return commentInput;
}

function setFormStyle(form){
    form.style.position = "fixed";
    form.style.top = "50%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
}

function addSubmitEventListener(submitButton, form, containerList) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            const notification = new Notification(containerList, formData);
            console.log(formData)
            notification.show(formData, 10000, [notification, containerList[1], containerList[2]]);
            form.reset();
            formData = {};
        } else {
            const errorNotification = new Notification(containerList);
            errorNotification.show("Будь ласка, заповніть УСІ обов`язкові поля коректно.", 2500, errorNotification);
        }
    });
}

function initOrderForm(product, containerList) {
    const form = document.createElement("form");
    form.classList.add("order-form");

    updateFormData("Назва продукту: ", product.name);
    updateFormData("Детальна інформація: ", product.description);

    const nameLabel = createNameLabel();
    const nameInput = createNameInput(nameLabel);
    const citySelect = createCitySelect();
    const postOfficeLabel = createPostOfficeLabel();
    const postOfficeInput = createPostOfficeInput(postOfficeLabel);
    const paymentLabelSelect = createPaymentLabelSelect();
    const quantityLabel = createQuantityLabel();
    const quantityInput = createQuantityInput(quantityLabel);
    const commentLabel = createCommentLabel();
    const commentInput = createCommentInput(commentLabel);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Підтвердити замовлення";

    addSubmitEventListener(submitButton, form, containerList);

    setFormStyle(form);

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(citySelect);
    form.appendChild(document.createElement("br"));
    form.appendChild(postOfficeLabel);
    form.appendChild(postOfficeInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(paymentLabelSelect);
    form.appendChild(document.createElement("br"));
    form.appendChild(quantityLabel);
    form.appendChild(quantityInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(commentLabel);
    form.appendChild(commentInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton);

    return form;
}
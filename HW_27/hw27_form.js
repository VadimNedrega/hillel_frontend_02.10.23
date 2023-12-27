// ********** Strict mode **********
"use strict";

let formData = {};
let orders = [];

function updateFormData(key, value) {
    formData[key] = value;
}

function createLabel(textContext) {
    const label =  document.createElement("label");
    label.textContent = textContext;

    return label;
}

function createInput(label) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("required", true);

    input.addEventListener("input", function () {
        updateFormData(label.textContent, this.value);
    });

    return input;
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

function createQuantityInput(quantityLabel, product) {
    const quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("required", true);
    quantityInput.setAttribute("value", 1);
    updateFormData(quantityLabel.textContent, 1);

    quantityInput.addEventListener("input", function () {
        updateFormData(quantityLabel.textContent, this.value);
        updateFormData("Ціна", product.price * this.value);
    });

    return quantityInput;
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
    form.style.top = "40%";
    form.style.left = "50%";
    form.style.transform = "translate(-50%, -50%)";
}

function addSubmitEventListener(submitButton, form, containerList) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            const notification = new Notification(containerList, formData);
            notification.show(formData, 1000, [notification, containerList[1], containerList[2]]);
            form.reset();
            saveOrderToLocalStorage(formData);
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
    updateFormData("Дата замовлення", new Date(Date.now()).toLocaleDateString())
    updateFormData("Ціна", product.price);

    const nameLabel = createLabel("ПІБ покупця: ");
    const nameInput = createInput(nameLabel);
    const citySelect = createCitySelect();
    const postOfficeLabel = createLabel("Склад Нової пошти для надсилання: ");
    const postOfficeInput = createInput(postOfficeLabel);
    const paymentLabelSelect = createPaymentLabelSelect();
    const quantityLabel = createLabel("Кількість продукції, що купується: ");
    const quantityInput = createQuantityInput(quantityLabel, product);
    const commentLabel = createLabel("Коментар до замовлення: ");
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

    orders.push(formData);

    return form;
}
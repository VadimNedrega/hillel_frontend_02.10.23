// ********** Strict mode **********
"use strict";

const form = document.createElement("form");
form.style.textAlign = "center";
form.style.marginBottom = "20px";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter the city");
input.style.padding = "8px";
input.style.marginRight = "10px";

const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "Show weather");
submitBtn.style.padding = "8px";
submitBtn.style.cursor = "pointer";

form.appendChild(input);
form.appendChild(submitBtn);

document.body.insertBefore(form, document.body.firstChild);

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "15%";
table.style.margin = "auto";

function WeatherObj(name, main, weather, wind) {
    this.name = name;
    this.main = main;
    this.weather = weather;
    this.wind = wind;
}

function WeatherShowObj(city, temp, pressure, description, humidity, speed, deg, icon) {
    this.city = city;
    this.temp = temp;
    this.pressure = pressure;
    this.description = description;
    this.humidity = humidity;
    this.speed = speed;
    this.deg = deg;
    this.icon = icon;
}

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const city = input.value;
    const weather = await getWeather(city);
    console.log(weather)

    const {temp, pressure, humidity} = weather.main;
    const {speed, deg} = weather.wind;
    const {description, icon} = weather.weather[0];
    const iconPicture = await getIcon(icon);

    const objForShow = new WeatherShowObj(city, temp, pressure, description, humidity, speed, deg, iconPicture);
    console.log(objForShow)

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    for (const key in objForShow) {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.style.border = "1px solid black";
        cell1.style.padding = "8px";
        cell1.style.textAlign = "left";
        cell1.textContent = key;

        cell2.style.border = "1px solid black";
        cell2.style.padding = "8px";
        cell2.style.textAlign = "left";

        if (key === "icon") {
            const img = document.createElement("img");
            img.src = iconPicture;
            img.style.width = "50px";
            img.style.height = "50px";
            cell2.appendChild(img);
        } else {
            cell2.textContent = objForShow[key];
        }
    }

    document.body.appendChild(table);
});

async function getWeather(city) {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", city);
    url.searchParams.append("units", "metric");
    url.searchParams.append("APPID", "5d066958a60d315387d9492393935c19");

    const response = await fetch(url, {
        method: "GET",
    });

    if (response.status !== 200) {
        alert("City can't be found. Please enter a valid value using latin symbols");
        location.reload();
    } else {
        return await response.json();
    }
}

async function getIcon(iconCode) {
    const url = new URL(`https://openweathermap.org/img/w/${iconCode}.png`);
    const response = await fetch(url, {
        method: "GET",
    });

    const blob = await response.blob();
    
    return URL.createObjectURL(blob);
}
"use strict";
function makeCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
}
console.log(makeCar("Honda", "Civic", ["color", "Black"], ["year", 2024]));
console.log(makeCar("BMW", "M5", ["color", "Black"], ["sunroof", true]));

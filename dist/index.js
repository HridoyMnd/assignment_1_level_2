"use strict";
function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
function filterByRating(items) {
    const HighestRating = items === null || items === void 0 ? void 0 : items.filter((item) => (item === null || item === void 0 ? void 0 : item.rating) >= 4);
    return HighestRating;
}
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `The Car Made by ${this.make} company In ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `The car model is ${this.model}`;
    }
}
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    else {
        let mostExpensive = products[0];
        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }
        return mostExpensive;
    }
}

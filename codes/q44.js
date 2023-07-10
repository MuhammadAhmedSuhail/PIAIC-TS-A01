"use strict";
function create_car(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
        extras: {}
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        var key = Object.keys(extra)[0];
        var value = extra[key];
        car.extras[key] = value;
    }
    return car;
}
var myCar = create_car("Toyota", "Camry", { color: "Blue" }, { feature: "Sunroof" });
console.log(myCar);
module.exports = {};

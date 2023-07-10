"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Muhammad ahmed";
console.log("Lowercase: ".concat(name.toLowerCase()));
console.log("Uppercase: ".concat(name.toUpperCase()));
console.log("Titlecase: ".concat(name.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ")));

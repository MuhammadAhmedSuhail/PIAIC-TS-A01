"use strict";
var guestList = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
var message = "Hello, ";
// Print invitation messages to each person
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log(message + guest);
}
// Print the number of people being invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList.length));
module.exports = {};

"use strict";
var guestList = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
var guestUnableToMakeIt = guestList[1]; // The second guest can't make it
console.log("".concat(guestUnableToMakeIt, " is unable to make it to the dinner."));
guestList[1] = "Sufian"; // Replace the second guest with a new person
// Print the second set of invitation messages
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of engaging conversations."));
}
module.exports = {};

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Kashmir", "Riyadh", "Jeddah", "Dubai"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Print the array to show it's still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Print the array to show it's still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show its order has changed
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
// Print the array to show it's back to its original order
console.log("\nOriginal order (restored):");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
// Print the array to show its order has been changed
console.log("\nAlphabetical order:");
console.log(placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
// Print the array to show its order has changed
console.log("\nReverse alphabetical order:");
console.log(placesToVisit);
module.exports = {};

const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];

console.log("Good news! We found a bigger dinner table.\n");

guestList.unshift("Sufian"); // Add a new guest to the beginning of the array
guestList.splice(2, 0, "Ibrahim"); // Add a new guest to the middle of the array
guestList.push("Talal"); // Add a new guest to the end of the array

// Print a new set of invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversations.`);
}

export = {}
const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
const guestUnableToMakeIt = guestList[1]; // The second guest can't make it

console.log(`${guestUnableToMakeIt} is unable to make it to the dinner.`);

guestList[1] = "Sufian"; // Replace the second guest with a new person

// Print the second set of invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of engaging conversations.`);
}

export = {}
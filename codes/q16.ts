const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

for (const guest of guestList) {
  console.log(`Dear ${guest}, you're still invited to dinner. Please join us for an evening of engaging conversations.`);
}

guestList.length = 0; // Remove the last two names from the list

console.log(`Current guest list: ${guestList}`);

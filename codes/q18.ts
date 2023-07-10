const guestList: string[] = ["Ahmed", "Ahsan", "Hasaan", "Zayad"];
const message = "Hello, ";

// Print invitation messages to each person
for (const guest of guestList) {
  console.log(message + guest);
}

// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);


export = {}
const usernames: string[] = ["admin", "Ahmed", "Ahsan", "Sufian", "Talal"];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames from the array
usernames.length = 0;

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

export = {}
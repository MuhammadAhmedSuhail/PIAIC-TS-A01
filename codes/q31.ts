const current_users: string[] = ["john", "alice", "bob", "charlie", "david"];
const new_users: string[] = ["john", "jane", "adam", "mike", "sarah"];

for (const new_username of new_users) {
  const usernameExists = current_users.some((current_username) =>
    current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (usernameExists) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}

export = {}
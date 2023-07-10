let name = "Muhammad ahmed"
console.log(`Lowercase: ${name.toLowerCase()}`)
console.log(`Uppercase: ${name.toUpperCase()}`)
console.log(`Titlecase: ${name.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")}`)

export {};
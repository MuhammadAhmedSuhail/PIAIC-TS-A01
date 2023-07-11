# PIAIC-TS-A01
Assignment1 Codes for Typescript PIAIC WMD Program Quarter 1

### 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download) and [VS Code](https://code.visualstudio.com/) on your computer.

> After installing the software run the code below in a terminal to check if the installation was successful.

```
node -v
tsc -v
code -v
```

The **output** of the code above should be something like this
</br>
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/2ae5b339-9d0a-4936-b7b3-f950ec773946" alt="Image" />
</p>


### 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

```typescript
let name = "Muhammad"
console.log(`Hello ${name}, would you like to learn some Python today?`)

export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/e0f8ddbc-d820-48bb-93e1-29ca53c1b8e4" alt="Image" />
</p>


### 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

```typescript
let name = "Muhammad ahmed"
console.log(`Lowercase: ${name.toLowerCase()}`)
console.log(`Uppercase: ${name.toUpperCase()}`)
console.log(`Titlecase: ${name.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")}`)

export {};
```



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

<br/>

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

<br/>

### 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

```typescript
let name = "Muhammad ahmed"
console.log(`Lowercase: ${name.toLowerCase()}`)
console.log(`Uppercase: ${name.toUpperCase()}`)
console.log(`Titlecase: ${name.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")}`)

export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/ef26f53c-52bb-4a08-b604-0474757e07a7" alt="Image" />
</p>

<br/>

### 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”

```typescript
let name = "David Goggins"
let quote = "Don't stop when you're tired. Stop when you're done."

console.log(`${name} said, "${quote}"`)
export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d8f9f5e4-0105-490d-a70a-7967b853994d" alt="Image" />
</p>

<br/>

### 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

```typescript
let famous_person = "David Goggins"
let quote = "Don't stop when you're tired. Stop when you're done."
let message = `${famous_person} said, "${quote}"`

console.log(message)
export {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/f8439978-0388-43a2-bcc8-5e1cd93be524" alt="Image" />
</p>

<br/>

### 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

```typescript
const nameWithWS = "\t   \n Muhammad Ahmed   \t   \n";
console.log(`Name with whitespace: "${nameWithWS}"`);

const strippedName = nameWithWS.trim();
console.log(`Stripped name: "${strippedName}"`);

export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/6ae409fc-0e04-41dc-8398-86120fef9f4f" alt="Image" />
</p>

<br/>

### 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

```typescript
// Addition: 5 + 3 = 8
const additionResult = 5 + 3;
console.log(`Addition: 5 + 3 = ${additionResult}`);

// Subtraction: 10 - 2 = 8
const subtractionResult = 10 - 2;
console.log(`Subtraction: 10 - 2 = ${subtractionResult}`);

// Multiplication: 4 * 2 = 8
const multiplicationResult = 4 * 2;
console.log(`Multiplication: 4 * 2 = ${multiplicationResult}`);

// Division: 16 / 2 = 8
const divisionResult = 16 / 2;
console.log(`Division: 16 / 2 = ${divisionResult}`);
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/78dfa973-7fae-407b-9e52-39334fe5d77c" alt="Image" />
</p>

<br/>

### 8. You should create four lines that look like this: console.log(5 + 3)

```typescript
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);

export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/b09bbc0a-76e4-4720-90c6-81d8b632027d" alt="Image" />
</p>

<br/>

### 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

```typescript
const favoriteNumber = 8;
const message = `My favorite number is ${favoriteNumber}.`;

console.log(message);

export = {}
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/44b43c7a-e991-4673-869c-f04806314702" alt="Image" />
</p>

<br/>

### 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

```typescript
// Program 1
// Store the favorite number in a variable
const favoriteNumber = 8;

// Create a message using string interpolation to include the favorite number
const message = `My favorite number is ${favoriteNumber}.`;

// Print the message to the console
console.log(message);

// Program 2
// Printing the result of 5+3 4 times
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);


// Export an empty object (commonly used in TypeScript modules)
export = {};
```
#### Output:
<p align="center">
  <img src="https://github.com/MuhammadAhmedSuhail/PIAIC-TS-A01/assets/72251313/d30c39e0-00f7-4556-83ec-f267e630440d" alt="Image" />
</p>





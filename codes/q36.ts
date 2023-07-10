function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message "${message}" printed on it.`);
  }
  
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, world!"); // Custom-sized shirt with a different message
  
export = {}
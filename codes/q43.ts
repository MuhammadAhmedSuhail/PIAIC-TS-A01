function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (const item of items) {
      console.log(item);
    }
    console.log("Bread");
    console.log("Sandwich Order Complete\n");
  }
  
  make_sandwich("Cheese", "Ham");
  make_sandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
  make_sandwich("Peanut Butter", "Jelly");

  export = {}
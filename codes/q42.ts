function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
  
    for (const magician of magicians) {
      const great_magician = magician + " the Great";
      great_magicians.push(great_magician);
    }
  
    return great_magicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  const modified_magician_names: string[] = make_great([...magician_names]);
  show_magicians(magician_names);
  show_magicians(modified_magician_names);

  export = {}
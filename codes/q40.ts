function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
}
  
const magician_names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magician_names);

  
export = {}
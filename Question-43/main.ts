let magicians_names: string[] = ["John", "Pope", "Gayle"];

function make_great(magician: string[]): string[] {
  let great_magicians: any[] = [];
  magicians_names.forEach((magician) => {
    great_magicians.push(`${magician} the Great`);
});
return great_magicians;
}

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

let great_magicians = make_great(magicians_names.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians_names); // Shows original names
console.log("Great magicians:");
show_magicians(great_magicians); // Shows modified names

// Store the person's name with whitespace characters
let personName: string = "\t Mujtaba \n Hassan \t";

// Print the name with whitespace
console.log("Name with whitespace:", personName);

// Strip the whitespace characters using regular expressions
const strippedName = personName.replace(/\s/g, "");

// Print the stripped name
console.log("Stripped name:", strippedName);

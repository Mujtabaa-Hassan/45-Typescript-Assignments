"use strict";
let magicians_names = ["John", "Pope", "Gayle"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians_names); // Modifies the original array
show_magicians(magicians_names); // Shows modified names

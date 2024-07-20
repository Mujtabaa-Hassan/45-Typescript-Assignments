// Question-16 Answer:
let guests: string[] = ["Jawad Ahmed", "Saim Shafqat", "Hanif Shah"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Waqas Shah");
guests.splice(guests.length / 2, 0, "Saim Saeed");
guests.push("Mujtaba Hassan");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
let guests: string[] = ["Jawad Ahmed", "Saim Shafqat", "Hanif Shah"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Waqas Shah");
guests.splice(guests.length / 2, 0, "Saim Saeed");
guests.push("Mujtaba Hassan");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
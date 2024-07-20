// Q14 Answer:
let guests: string[] = ["Jawad Ahmed", "Saim Shafqat", "Waqas Shah"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


// Q15 Answer:
let unableToAttend = "Waqas Shah";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Hanif Shah";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
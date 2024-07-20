"use strict";
let current_users = ["admin", "saim", "shafqat", "waqas", "hanif"];
let new_users = ["jawad", "ahmed", "shahjee", "admin", "asif"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});

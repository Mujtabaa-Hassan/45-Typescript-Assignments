// Declare an array to store friends' names
var friends = ["Jawad", "Saim", "Waqas"];
// Loop through the array and print personalized greetings
for (var i = 0; i < friends.length; i++) {
    var friendName = friends[i]; // Store current friend's name for readability
    console.log("Hello, ".concat(friendName, "! How are you doing today?"));
}

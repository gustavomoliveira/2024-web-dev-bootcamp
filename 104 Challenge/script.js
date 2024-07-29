let guestPrompt = prompt("What is your name?");
let guest = guestPrompt.charAt(0).toUpperCase() + guestPrompt.slice(1);
let guestList = ["Gustavo", "Mari", "Bartô"];

if(guestList.includes(guest)) {
    alert("Welcome!");
} else {
    alert("Sorry. Maybe next time.");
}



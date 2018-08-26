// objects to simulate a conversation
sportsCarnival = {
	"Person1": "Blah blah blah",
	"Person2": "Blah blah",
	"Person3": "blablah"
}

swimmingCarnival = {
	"Message1": "Blah blah blah blaaaaaaaahhhhh",
	"Message2": "blaaaaaaaaaaaaaaaaaaaaaaahhhhh"
}

// selecting messages
let message1 = document.getElementsByClassName("text-message")[0];
let message2 = document.getElementsByClassName("text-message")[1];
let message3 = document.getElementsByClassName("text-message")[2];

// adding messages
message1.innerHTML = sportsCarnival.Person1;
message2.innerHTML = sportsCarnival.Person2;
message3.innerHTML = sportsCarnival.Person3;
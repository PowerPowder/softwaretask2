function displayContents(){
	// Stub for credidentials that a user would enter
	let correctuser = "14braschr";
	let correctpass = "password";
	let year = 11;

	// Selecting elements
	let content = document.getElementById("content");
	let login = document.getElementById("login");
	let invalid = document.getElementById("invalid");
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if (username === correctuser && password === correctpass){
		content.classList.remove("login-screen");
		login.style.display = 'none';
	} else {
		invalid.style.display = 'block';
	}

	console.log(username);
	console.log(password);
}
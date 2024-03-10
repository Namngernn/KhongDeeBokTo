const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Attach an event listener to the Sign In button
document.getElementById('signInButton').addEventListener('click', function () {
	// Redirect to the /main route when the button is clicked
	window.location.href = '/main';
});

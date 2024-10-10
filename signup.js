const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
event.preventDefault();

const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

  // Simple validation (replace with your backend validation)
if (username.length < 5) {
    errorMessage.textContent = 'Username must be at least 5 characters long.';
    return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return;
}

if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long.';
    return; }

  // Simulate form submission (replace with actual submission logic)
    console.log('Submitted:', { username, email, password });
    errorMessage.textContent = 'Success! (placeholder for actual submission)';
    const button = document.querySelector('button');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
      // Use the window.location.href property to redirect to the new page
      window.location.href = 'home.html';  // Replace with the actual path to your other page
    });
});


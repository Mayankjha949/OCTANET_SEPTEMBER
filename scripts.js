document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Logged in successfully');
        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password please ensure you Sing Up');
    }
});

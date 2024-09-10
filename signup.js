document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername === '' || newEmail === '' || newPassword === '') {
        alert('Please fill in all fields');
    } else {
        // Store the user information in localStorage
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);

        alert('Signed up successfully');
        // Redirect to the login page
        window.location.href = 'index.html';
    }
});

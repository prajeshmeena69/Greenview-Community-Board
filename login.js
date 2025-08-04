document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple Demo Authentication (Hardcoded Username/Password)
        if (username === 'admin' && password === '1234') {
            alert('Login Successful!');
            window.location.href = 'admin.html';  // Redirect to Admin Page
        } else {
            alert('Invalid Username or Password');
        }
    });
});
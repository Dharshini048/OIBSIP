const USER_CREDENTIALS = {
    username: "user",
    password: "pass"
};

const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const errorMessage = document.getElementById('error-message');

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username) {
        errorMessage.textContent = 'Please fill out this field';
        return;
    }

    if (!password) {
        errorMessage.textContent = 'Please fill out this field';
        return;
    }

    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
        loginForm.classList.add('hidden');
        dashboard.classList.remove('hidden');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
}


function logout() {
    dashboard.classList.add('hidden');
    loginForm.classList.remove('hidden');
}


loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);

// Elementlarni olish
const authContainer = document.getElementById('authContainer');
const registrationContainer = document.getElementById('registrationContainer');
const loginContainer = document.getElementById('loginContainer');

// Funksiyalar
function showRegistration() {
    authContainer.style.display = 'none';
    registrationContainer.style.display = 'block';
}

function showLogin() {
    authContainer.style.display = 'none';
    loginContainer.style.display = 'block';
}

function register() {
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const regError = document.getElementById('regError');

    if (username === '' || password === '') {
        regError.textContent = "Barcha maydonlarni to'ldiring!";
        return;
    }

    if (password.length < 6) {
        regError.textContent = "Parol kamida 6 belgidan iborat bo'lishi kerak!";
        return;
    }

    // Ma'lumotlarni saqlash
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Ro'yxatdan o'tish muvaffaqiyatli!");
    registrationContainer.style.display = 'none';
    authContainer.style.display = 'block';
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const loginError = document.getElementById('loginError');

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert("Kirish muvaffaqiyatli!");
        loginContainer.style.display = 'none';
        document.body.innerHTML = `<h1 style="text-align: center;">Xush kelibsiz, ${username}!</h1>`;
    } else {
        loginError.textContent = "Login yoki parol noto'g'ri!";
    }
}

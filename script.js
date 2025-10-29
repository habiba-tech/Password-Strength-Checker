function checkStrength() {
    const password = document.getElementById("password").value;
    const bar = document.getElementById("strength-bar");
    const text = document.getElementById("strength-text");

    let strength = 0;

    if (password.length >= 6) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;

    if (password.length === 0) {
        bar.className = '';
        text.textContent = '';
        return;
    }

    if (strength <= 2) {
        bar.className = 'weak';
        text.textContent = 'Weak Password 😟';
        text.style.color = 'red';
    } else if (strength == 3) {
        bar.className = 'medium';
        text.textContent = 'Medium Strength 😐';
        text.style.color = 'orange';
    } else {
        bar.className = 'strong';
        text.textContent = 'Strong Password 💪';
        text.style.color = 'limegreen';
    }
}

function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

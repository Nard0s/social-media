document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('.btn input[type="button"]');
    registerButton.addEventListener('click', registerUser);

    function registerUser() {
        const fullName = document.querySelector('input[name="name"]').value;
        const username = document.querySelector('input[name="uname"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const confirmPassword = document.querySelector('input[name="confirm-password"]').value;
        const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';

        if (password !== confirmPassword) {
            document.querySelector('.alert').innerText = 'Passwords do not match!';
            return;
        }

        const user = {
            fullName,
            username,
            email,
            phone,
            password,
            gender
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        document.querySelector('.alert').innerText = 'User registered successfully!';
    }
});

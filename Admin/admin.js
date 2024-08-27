document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('userList');

    function displayUsers() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.length === 0) {
            userList.innerHTML = '<p>No registered users.</p>';
            return;
        }

        let html = '<table><tr><th>Full Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Gender</th><th>Action</th></tr>';
        users.forEach((user, index) => {
            html += `<tr>
                        <td>${user.fullName}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.gender}</td>
                        <td><button onclick="deleteUser(${index})">Delete</button></td>
                     </tr>`;
        });
        html += '</table>';
        userList.innerHTML = html;
    }

    function deleteUser(index) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.splice(index, 1); 
        localStorage.setItem('users', JSON.stringify(users));
        displayUsers(); 
    }

    displayUsers(); 
});

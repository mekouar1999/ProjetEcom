document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Récupère les utilisateurs existants depuis localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifie si l'utilisateur existe déjà
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        document.getElementById('error-message').textContent = "Nom d'utilisateur ou email déjà utilisé.";
    } else {
        // Ajoute le nouvel utilisateur
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        // Redirige vers la page de connexion
        window.location.href = "login.html";
    }
});

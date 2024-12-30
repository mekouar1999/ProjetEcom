document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Récupère les utilisateurs existants depuis localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifie si l'utilisateur existe
    const userExists = users.some(user => user.email === email && user.password === password);

    if (userExists) {
        // Redirige vers la page d'accueil
        window.location.href = "./home/home.html";
    } else {
        document.getElementById('error-message').textContent = "Email ou mot de passe incorrect.";
    }
});

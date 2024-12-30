// Utilisateurs fictifs
const users = [
    { username: "mekouaro1999", email: "othman.mekouar99@gmail.com", password: "password1" },
    { username: "mekouary1998", email: "othman.mekouar99@gmail.com", password: "password2" }
];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérifie si l'utilisateur existe dans la base fictive
    const userExists = users.some(user => 
        user.username === username && 
        user.email === email && 
        user.password === password
    );

    if (userExists) {
        // Redirige vers la page d'accueil
        window.location.href = "home.html";
    } else {
        // Affiche un message d'erreur
        errorMessage.textContent = "Nom d'utilisateur, email ou mot de passe incorrect.";
    }
});

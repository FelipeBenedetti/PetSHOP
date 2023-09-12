//Sair.js

function logoutUser() {
    localStorage.removeItem('isUserLoggedIn');
    window.location.href = 'inicio.html'; // redirecionar para a página inicial ou login após o logout
}
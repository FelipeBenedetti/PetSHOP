//verificalogin.js

window.onload = function() {
    // Verificar se o usuário está logado
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    if (isUserLoggedIn !== 'true') {
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = "login.html"; // Redireciona para a página de login ou qualquer página inicial que você quiser
    }
}

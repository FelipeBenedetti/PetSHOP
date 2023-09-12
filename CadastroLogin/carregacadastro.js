// carregacadastro.js

document.addEventListener("DOMContentLoaded", function() {
    // 1. Recuperar o email do usuário logado.
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    
    // Se o usuário não estiver logado, não faça nada.
    if (!currentUserEmail) return;

    // 2. Recuperar os outros dados do usuário.
    const storedData = localStorage.getItem(currentUserEmail);
    const userData = JSON.parse(storedData);

    // 3. Preencher os campos do formulário com esses dados.
    document.getElementById("editFullName").value = userData.fullName || "";
    document.getElementById("editEmail").value = currentUserEmail;  // Email não pode ser alterado
    document.getElementById("editPhoneNumber").value = userData.cellNumber || "";
    document.getElementById("editAddress").value = userData.address || "";
    document.getElementById("editCep").value = userData.cep || "";
    document.getElementById("editCity").value = userData.city || "";
    document.getElementById("editState").value = userData.state || "";
    document.getElementById("editCountry").value = userData.country || "";
    // A senha é algo sensível e não é usualmente preenchida para edição direta.
    // document.getElementById("editPassword").value = userData.password || "";
});

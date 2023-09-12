// atualizacadastro.js

document.addEventListener("DOMContentLoaded", function() {
    // Suponho que o usuário esteja autenticado através do seu e-mail. Modifique conforme sua lógica de autenticação.
    const userEmail = "email_do_usuario_logado";  // Você precisa obter esse e-mail de alguma maneira (pode ser de um login anterior ou outra lógica).

    const userData = JSON.parse(localStorage.getItem(userEmail));

    if(userData) {
        document.getElementById("editFullName").value = userData.fullName;
        document.getElementById("editEmail").value = userData.email;
        document.getElementById("editPhoneNumber").value = userData.cellNumber;
        document.getElementById("editAddress").value = userData.address;
        document.getElementById("editCep").value = userData.cep;
        document.getElementById("editCity").value = userData.city;
        document.getElementById("editState").value = userData.state;
        document.getElementById("editCountry").value = userData.country;
        document.getElementById("editPassword").value = userData.password;
    }
});

function updateUserData() {
    const userEmail = document.getElementById("editEmail").value;
    
    const userData = {
      fullName: document.getElementById("editFullName").value,
      email: userEmail,
      cellNumber: document.getElementById("editPhoneNumber").value,
      address: document.getElementById("editAddress").value,
      cep: document.getElementById("editCep").value,
      city: document.getElementById("editCity").value,
      state: document.getElementById("editState").value,
      country: document.getElementById("editCountry").value,
      password: document.getElementById("editPassword").value 
    };

    const repeatPassword = document.getElementById("editRepeatPassword").value;

    if (userData.password !== repeatPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    localStorage.setItem(userEmail, JSON.stringify(userData));
    alert("Dados atualizados com sucesso!");
}

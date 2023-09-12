// cadastro.js

function register(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const cellNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const cep = document.getElementById("cep").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
  
    if (password !== repeatPassword) {
      alert("As senhas não coincidem.");
      return;
    }
  
    // Armazena os dados no localStorage
    const userData = {
      fullName: fullName,
      email: email,
      cellNumber: cellNumber,
      address: address,
      cep: cep,
      city: city,
      state: state,
      country: country,
      password: password 
    };
  
    localStorage.setItem(email, JSON.stringify(userData));
    //localStorage.setItem(email, password);
    alert("Cadastro realizado com sucesso!");
  }
  




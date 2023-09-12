/*document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recuperando o valor do campo de email
    const loginEmail = document.getElementById('loginEmail').value;
    const storedData = localStorage.getItem(loginEmail);
    const enteredPassword = document.getElementById('loginPassword').value;

    if (storedData) {
        const storedUser = JSON.parse(storedData);
        
        if (storedUser.password === enteredPassword) {
            alert('Login bem-sucedido!');
            
            // Redirecionando o usuário para a página Minha Conta
            window.location.href = "minhaconta.html";
        } else {
            alert('Email ou senha incorretos!');
        }
    } else {
        alert('Email não registrado!');
    }
});
*/

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const storedData = localStorage.getItem(loginEmail);
    //Login.js
    
    console.log("Dados armazenados:", storedData); // Ver o que está sendo recuperado do localStorage

    const enteredPassword = document.getElementById('loginPassword').value;

    if (storedData) {
        const storedUser = JSON.parse(storedData);
        
        if (storedUser.password === enteredPassword) {
            alert('Login bem-sucedido!');
            localStorage.setItem('isUserLoggedIn', 'true');
            localStorage.setItem('currentUserEmail', loginEmail);
            window.location.href = "minhaconta.html";
        } else {
            console.log("Senha inserida:", enteredPassword);
            console.log("Senha armazenada:", storedUser.password);
            alert('Email ou senha incorretos!');
        }
    } else {
        alert('Email não registrado!');
    }
});

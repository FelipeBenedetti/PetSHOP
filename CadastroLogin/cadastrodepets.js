// cadastrodepet.js

document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById('petRegistrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const currentUserEmail = localStorage.getItem('currentUserEmail');
        if (!currentUserEmail) {
            alert('Erro: Usuário não identificado!');
            return;
        }

        // Recuperando os pets do usuário atual ou inicializando uma lista vazia se não houver pets cadastrados
        let userPets = JSON.parse(localStorage.getItem(currentUserEmail + '-pets')) || [];
        
        let newPet = {
            name: document.getElementById('petName').value,
            type: document.getElementById('petType').value,
            breed: document.getElementById('petBreed').value,
            temperament: document.getElementById('petTemperament').value
        };

        userPets.push(newPet);
        
        // Salvando os pets do usuário atual de volta no localStorage
        localStorage.setItem(currentUserEmail + '-pets', JSON.stringify(userPets));

        alert('Pet cadastrado com sucesso!');
    });
    
});

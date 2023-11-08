const aSend = document.querySelector('#aSend');

var usersReg = [];

var correct = false;

aSend.addEventListener('click', function(event) {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if (email === "" || password === "") {
        event.preventDefault();
        alert('Debe llenar todos los campos.');
    } else {
        const log = {
            email: email,
            password: password
        };
    
        if (localStorage.getItem('registerUsers') !== null) {
            usersReg = JSON.parse(localStorage.getItem('registerUsers'));
    
            for (let i = 0; i < usersReg.length; i++) {
                if (usersReg[i].email === email && usersReg[i].password === password) {
                    correct = true;
                }
            }
        } 
        
        if (usersReg.length === 0) {
            event.preventDefault();
            alert('Debe crear una cuenta primero.');
        } 
        
        if (correct === false) {
            event.preventDefault();
            alert('Correo o contraseña incorrectos.');
        } else {
            localStorage.setItem('loggedUser', JSON.stringify(log));
        } 
    }
})
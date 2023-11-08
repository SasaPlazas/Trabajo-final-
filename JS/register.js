import { User } from './User.js';

const aSend = document.querySelector('#aSend');

var usersReg = [];

var validateEmail = false;

aSend.addEventListener('click', function(event) {
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var phone = document.querySelector('#phone').value;

    if (name === "" || email === "" || password === "" || phone === ""){
        event.preventDefault();
        alert('Por favor, rellene todos los campos.');
    } else {
        const user = new User(name, email, password, phone, []);

        if (localStorage.getItem('registerUsers') !== null){
            usersReg = JSON.parse(localStorage.getItem('registerUsers'));
        
            usersReg.forEach(function(userReg) {
                if (userReg.email !== email) {
                    validateEmail = true;
                }
            });        
        }

        if (usersReg.length === 0) {
            usersReg.push(user);
            localStorage.setItem('registerUsers', JSON.stringify(usersReg));
            return;
        }

        if (validateEmail === true) {
            usersReg.push(user);
            localStorage.setItem('registerUsers', JSON.stringify(usersReg));
            return
        } else {
            event.preventDefault();
            alert('Este correo ya está registrado.');
        }
    }
})
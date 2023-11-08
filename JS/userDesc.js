import { User } from './User.js';
import { Character } from './Character.js';

function renderInfoUser(user) {
    let container = document.getElementById("infoUser");
    container.innerHTML = user.toHTMLUser();
}



let user;

var userJSON = []
var userLogged;

if (localStorage.getItem('registerUsers') !== null){
    userJSON = JSON.parse(localStorage.getItem('registerUsers'));
    userLogged = JSON.parse(localStorage.getItem('loggedUser'));

    userJSON.forEach(users => {
        if (users.email === userLogged.email){
            user = new User(users.username, users.email, users.password, users.phone, users.favorites);
        }
    });
}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlide, 3000);

const closeSessionButton = document.getElementById('closeS');

closeSessionButton.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
});

const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

const registeredUsers = JSON.parse(localStorage.getItem('registerUsers'));

const userFavorites = registeredUsers.find(user => user.email === loggedUser.email)?.favorites;

let allCharacters = [];

const favoriteCharactersContainer = document.getElementById("favorites");

if (userFavorites.length !== 0) {
  userFavorites.forEach(favoriteCharacter => {
    const character = new Character(favoriteCharacter.img, favoriteCharacter.name, favoriteCharacter.description, favoriteCharacter.rol, favoriteCharacter.abilitie, favoriteCharacter.abilitieDescription, favoriteCharacter.imgAbilitie, favoriteCharacter.isSelected);
    allCharacters.push(character);
    favoriteCharactersContainer.innerHTML = allCharacters.map((character, index) => character.toHTMLCart(index)).join(''); 
  });
} else {
    favoriteCharactersContainer.innerHTML = '<div style="display: flex; justify-content: center; width: 600px; padding-left: 380px"><h3 style="align-self: center">No se encontraron personajes favoritos para este usuario.</h3></div>'
}

const editButton = document.querySelector('#editS');
editButton.addEventListener('click', editUser);

function editUser () {
    const name = document.getElementById('username').value;
    const phone = document.getElementById('phone').value;

    if (name === "" | phone === "") {
        alert('Por favor, rellene todos los campos');
    } else {
        let userLogged = JSON.parse(localStorage.getItem('loggedUser'));

        let registeredUsers = JSON.parse(localStorage.getItem('registerUsers')) || [];

        const foundUser = registeredUsers.find(user => user.email === userLogged.email);

        const foundUserIndex = registeredUsers.findIndex(user => user.email === userLogged.email);

        if (foundUserIndex !== -1) {
            registeredUsers.splice(foundUserIndex, 1);
        }

        if (foundUser.username !== name | foundUser.phone !== phone) {
            foundUser.username = name;
            foundUser.phone = phone;

            registeredUsers.push(foundUser)

            localStorage.setItem('registerUsers', JSON.stringify(registeredUsers));
            alert('Datos editados correctamente'); 
        } else {
            alert('No se han realizado cambios');
        }
    }
}

renderInfoUser(user);
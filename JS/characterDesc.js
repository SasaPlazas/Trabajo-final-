import { Character } from "./Character.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get('index');

const characterJSON = valorantArray[index]
let char = new Character(characterJSON.img, characterJSON.name, characterJSON.descripcion, characterJSON.rol, characterJSON.abilitie, characterJSON.abilitieDescription, characterJSON.imgAbilitie, characterJSON.isSelected);

function showDescriptionChar (sel) {
    let container = document.querySelector('#characterDescription');
    container.innerHTML = sel.toHTML();
}

showDescriptionChar(char);

const favButton = document.querySelector('#fav');
favButton.addEventListener('click', addFavorites);

function addFavorites () {
    let userLogged = JSON.parse(localStorage.getItem('loggedUser'));

    let selectedCharacter = char;

    let registeredUsers = JSON.parse(localStorage.getItem('registerUsers')) || [];

    const foundUser = registeredUsers.find(user => user.email === userLogged.email);
    const foundUserIndex = registeredUsers.findIndex(user => user.email === userLogged.email);

    if (foundUserIndex !== -1) {
        registeredUsers.splice(foundUserIndex, 1);
    }

    if (foundUser && selectedCharacter) {
        if (!foundUser.favorites.includes(selectedCharacter)) {
            foundUser.favorites.push(selectedCharacter);

            registeredUsers.push(foundUser)

            localStorage.setItem('registerUsers', JSON.stringify(registeredUsers));
            alert('Personaje añadido a favoritos correctamente'); 
        }
    }
}
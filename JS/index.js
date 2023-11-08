import { Character } from './Character.js';

var search = document.querySelector("#searchSend");

const rol1 = document.getElementById("rol1");
const rol2 = document.getElementById("rol2");
const rol3 = document.getElementById("rol3");
const rol4 = document.getElementById("rol4");

search.addEventListener('click', handleSearch);
rol1.addEventListener('change', handleSearch);
rol2.addEventListener('change', handleSearch);
rol3.addEventListener('change', handleSearch);
rol4.addEventListener('change', handleSearch);

let allCharacters = [];

let filterCharacters = [];

function handleSearch() {
    const searchText = document.querySelector('#buscar').value.toLowerCase();
    const rol1Checked = rol1.checked;
    const rol2Checked = rol2.checked;
    const rol3Checked = rol3.checked;
    const rol4Checked = rol4.checked;

    if (searchText) {
        filterCharacters = allCharacters.filter(character => {
            return character.name.toLowerCase().includes(searchText); 
        });
        renderAllCharacter(filterCharacters);
    } else if (rol1Checked) {
        filterCharacters = allCharacters.filter(character => {
            return character.rol.includes('Duelista');
        })
        renderAllCharacter(filterCharacters);
    } else if (rol2Checked) {
        filterCharacters = allCharacters.filter(character => {
            return character.rol.includes('Iniciador');
        })
        renderAllCharacter(filterCharacters);
    } else if (rol3Checked) {
        filterCharacters = allCharacters.filter(character => {
            return character.rol.includes('Controlador');
        })
        renderAllCharacter(filterCharacters);
    } else if (rol4Checked) {
        filterCharacters = allCharacters.filter(character => {
            return character.rol.includes('Centinela');
        })
        renderAllCharacter(filterCharacters);
    } else if (!searchText && !rol1Checked && !rol2Checked && !rol3Checked && !rol4Checked){
        renderAllCharacter(allCharacters);
    }
}

function showCharacterDetails(index) {
    location.href = `../HTML/character.html?index=${index}`;
}

function renderAllCharacter(allCharacter) {
    let container = document.getElementById("gridCharacters");
    let total = document.getElementById("total");
    total.innerHTML = `${allCharacter.length}` + ' Personajes';

    container.innerHTML = allCharacter.map((character, index) => character.toHTMLCart(index)).join('');

    container.addEventListener('click', function(event) {
        const cardLink = event.target.closest('div[id^="character_"]');
        if (cardLink) {
            const i = parseInt(cardLink.id.split('_')[1], 10);
            showCharacterDetails(i);
        }
    });
}


for (let i = 0; i < valorantArray.length; i++) {
    const characterJSON = valorantArray[i]
    let char = new Character(characterJSON.img, characterJSON.name, characterJSON.descripcion, characterJSON.rol, characterJSON.abilitie, characterJSON.abilitieDescription, characterJSON.imgAbilitie, characterJSON.isSelected)
    allCharacters.push(char)
}
    
renderAllCharacter(allCharacters);    
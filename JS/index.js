import { fetchAllCharacters } from "./fetchData.js";
import { Character } from "./Character.js";

var search = document.querySelector("#searchSend");

const rol1 = document.getElementById("rol1");
const rol2 = document.getElementById("rol2");
const rol3 = document.getElementById("rol3");
const rol4 = document.getElementById("rol4");

search.addEventListener("click", handleSearch);
rol1.addEventListener("change", handleSearch);
rol2.addEventListener("change", handleSearch);
rol3.addEventListener("change", handleSearch);
rol4.addEventListener("change", handleSearch);

console.log(await fetchAllCharacters());

let allCharacters = [];

let filterCharacters = [];

const loadCharacters = async () => {
  try {
    const data = await fetchAllCharacters();
    const charactersData = data.data.filter(
      (agent) => agent.isPlayableCharacter
    );
    allCharacters = charactersData.map((agent) => {
      return new Character(
        agent.fullPortrait,
        agent.displayName,
        agent.description,
        agent.role,
        agent.abilities,
        false
      );
    });
    renderAllCharacter(allCharacters);
  } catch (error) {
    console.error("Error al cargar los personajes: ", error);
  }
};

loadCharacters();

function handleSearch() {
  const searchText = document.querySelector("#buscar").value.toLowerCase();
  const rol1Checked = rol1.checked;
  const rol2Checked = rol2.checked;
  const rol3Checked = rol3.checked;
  const rol4Checked = rol4.checked;

  if (searchText) {
    filterCharacters = allCharacters.filter((character) => {
      return character.displayName.toLowerCase().includes(searchText);
    });
    renderAllCharacter(filterCharacters);
  } else if (rol1Checked) {
    filterCharacters = allCharacters.filter((character) => {
      return character.role.displayName.includes("Duelist");
    });
    renderAllCharacter(filterCharacters);
  } else if (rol2Checked) {
    filterCharacters = allCharacters.filter((character) => {
      return character.role.displayName.includes("Controller");
    });
    renderAllCharacter(filterCharacters);
  } else if (rol3Checked) {
    filterCharacters = allCharacters.filter((character) => {
      return character.role.displayName.includes("Duelista");
    });
    renderAllCharacter(filterCharacters);
  } else if (rol4Checked) {
    filterCharacters = allCharacters.filter((character) => {
      return character.role.displayName.includes("Sentinel");
    });
    renderAllCharacter(filterCharacters);
  } else if (
    !searchText &&
    !rol1Checked &&
    !rol2Checked &&
    !rol3Checked &&
    !rol4Checked
  ) {
    renderAllCharacter(allCharacters);
  }
}

function showCharacterDetails(index) {
  location.href = `../HTML/character.html?index=${index}`;
}

function renderAllCharacter(allCharacter) {
  let container = document.getElementById("gridCharacters");
  let total = document.getElementById("total");
  total.innerHTML = `${allCharacter.length}` + " Personajes";

  container.innerHTML = allCharacter
    .map((character, index) => character.toHTMLCart(index))
    .join("");

  container.addEventListener("click", function (event) {
    const cardLink = event.target.closest('div[id^="character_"]');
    if (cardLink) {
      const i = parseInt(cardLink.id.split("_")[1], 10);
      showCharacterDetails(i);
    }
  });
}

renderAllCharacter(allCharacters);

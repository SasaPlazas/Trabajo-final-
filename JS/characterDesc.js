import { fetchAllCharacters } from "./fetchData.js";
import { Character } from "./Character.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = parseInt(urlParams.get("index"), 10);

const loadCharacterInfo = async () => {
  try {
    const data = await fetchAllCharacters();
    const charactersData = data.data.filter(
      (agent) => agent.isPlayableCharacter
    );

    if (index >= 0 && index < charactersData.length) {
      const characterData = charactersData[index];

      const character = new Character(
        characterData.fullPortrait,
        characterData.displayName,
        characterData.description,
        characterData.role,
        characterData.abilities,
        false
      );

      showDescriptionChar(character);
    } else {
      console.error("Índice de personaje fuera de rango.");
    }
  } catch (error) {
    console.error("Error al cargar la descripción del personaje: ", error);
  }
};
loadCharacterInfo();

function showDescriptionChar(sel) {
  let container = document.querySelector("#characterDescription");
  container.innerHTML = sel.toHTML();
}

const favButton = document.querySelector("#fav");
favButton.addEventListener("click", addFavorites);

function addFavorites() {
  let userLogged = JSON.parse(localStorage.getItem("loggedUser"));

  let selectedCharacter = char;

  let registeredUsers = JSON.parse(localStorage.getItem("registerUsers")) || [];

  const foundUser = registeredUsers.find(
    (user) => user.email === userLogged.email
  );
  const foundUserIndex = registeredUsers.findIndex(
    (user) => user.email === userLogged.email
  );

  if (foundUserIndex !== -1) {
    registeredUsers.splice(foundUserIndex, 1);
  }

  if (foundUser && selectedCharacter) {
    if (!foundUser.favorites.includes(selectedCharacter)) {
      foundUser.favorites.push(selectedCharacter);

      registeredUsers.push(foundUser);

      localStorage.setItem("registerUsers", JSON.stringify(registeredUsers));
      alert("Personaje añadido a favoritos correctamente");
    }
  }
}

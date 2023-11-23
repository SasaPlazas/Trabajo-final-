export class Character {
  constructor(
    fullPortrait,
    displayName,
    description,
    role,
    abilities,
    isSelected
  ) {
    this.fullPortrait = fullPortrait;
    this.displayName = displayName;
    this.description = description;
    this.role = role;
    this.abilities = abilities;
    this.isSelected = isSelected;
  }

  getImg() {
    return this.fullPortrait;
  }

  getName() {
    return this.displayName;
  }

  getDescription() {
    return this.description;
  }

  getRol() {
    return this.role;
  }

  getAbilities() {
    return this.abilities;
  }

  getSelected() {
    return this.isSelected;
  }

  setSelected(isSelected) {
    this.isSelected = isSelected;
  }

  toHTML() {
    return `
        <div class="table">
            <div class="img">
                <img class="imgChar" src="${this.fullPortrait}" alt="">
            </div>
            <div class="infoPrincipal">
                <div class="nombre">
                    <h1 class="nameh3">Nombre:</h1>
                    <h2 class="nameh2">${this.displayName}</h2>
                </div>
                <div class="habilidades">
                    <h3 class="nameh3">Habilidades:</h3>
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td>
                                    <p class="abilitiep">${this.abilities[0].displayName}</p>
                                </td>
                                <td>
                                    <p class="abilitiep">${this.abilities[1].displayName}</p>
                                </td>
                                <td>
                                    <p class="abilitiep">${this.abilities[2].displayName}</p>
                                </td>
                                <td>
                                    <p class="abilitiep">${this.abilities[3].displayName}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="infoHabilidades">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="abilitieDescp">1. ${this.abilities[0].description}</p>
                                    <p class="abilitieDescp">2. ${this.abilities[1].description}</p>
                                    <p class="abilitieDescp">3. ${this.abilities[2].description}</p>
                                    <p class="abilitieDescp">4. ${this.abilities[3].description}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="infoSecun">
                <div class="descripcion">
                    <h3>Descripcion:</h3>
                    <p class="desc">${this.description}</p>
                </div>
                <div class="rol">
                    <h3>Rol:</h3>
                    <h4 class="rolh4">${this.role.displayName}</h4>
                </div>
                <div>
                    <h3>${this.abilities[3].displayName}</h3>
                    <img class="imgAbili" src="${this.abilities[3].displayIcon}" alt="">
                </div>
                <button id="fav">Añadir a favoritos<span id="loveIcon" class="material-symbols-outlined">favorite</span></button>
            </div>
        </div>
        `;
  }

  toHTMLCart(num) {
    return `
        <div id="character_${num}" style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-decoration: none; border: none;">
            <button class="card" onclick="showCharacterDetails(${num})">
                <img src="${this.fullPortrait}" class="imgCart"/>
                <div class="infoCart">
                    <h2 class="titleCart">${this.displayName}</h2>
                </div>
            </button>
        </div>
        `;
  }
}

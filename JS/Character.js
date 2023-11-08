export class Character {
    constructor(img, name, description, rol, abilitie, abilitieDescription, imgAbilitie, isSelected) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.rol = rol;
        this.abilitie = abilitie
        this.abilitieDescription = abilitieDescription;
        this.imgAbilitie = imgAbilitie;
        this.isSelected = isSelected;
    }

    getImg() {
        return this.img;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getRol() {
        return this.rol;
    }

    getAbilitie() {
        return this.abilitie;
    }

    getAbilitieDescription() {
        return this.abilitieDescription;
    }

    getImgAbilitie() {
        return this.imgAbilitie;
    }

    getSelected() {
        return this.isSelected
    }

    setSelected(isSelected) {
        this.isSelected = isSelected
    }

    toHTML(){
        return `
        <div class="table">
            <div class="img">
                <img class="imgChar" src="${this.img}" alt="">
            </div>
            <div class="infoPrincipal">
                <div class="nombre">
                    <h1 class="nameh3">Nombre:</h1>
                    <h2 class="nameh2">${this.name}</h2>
                </div>
                <div class="habilidades">
                    <h3 class="nameh3">Habilidades:</h3>
                    <table style="width: 100%;">
                        <tbody>
                            <tr>
                                <td>
                                    <p class="abilitiep">${this.abilitie[0]}</p>
                                </td>
                                <td>
                                    <p class="abilitiep">${this.abilitie[1]}</p>
                                </td>
                                <td>
                                    <p class="abilitiep">${this.abilitie[2]}</p>
                                </td>
                                <td>
                                    <p class="abilitiep">${this.abilitie[3]}</p>
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
                                    <p class="abilitieDescp">1. ${this.abilitieDescription[0]}</p>
                                    <p class="abilitieDescp">2. ${this.abilitieDescription[1]}</p>
                                    <p class="abilitieDescp">3. ${this.abilitieDescription[2]}</p>
                                    <p class="abilitieDescp">4. ${this.abilitieDescription[3]}</p>
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
                    <h4 class="rolh4">${this.rol}</h4>
                </div>
                <div>
                    <h3>${this.abilitie[3]}</h3>
                    <img class="imgAbili" src="${this.imgAbilitie}" alt="">
                </div>
                <button id="fav">Añadir a favoritos<span id="loveIcon" class="material-symbols-outlined">favorite</span></button>
            </div>
        </div>
        `
    }

    toHTMLCart(num) {
        return `
        <div id="character_${num}" style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-decoration: none; border: none;">
            <button class="card" onclick="showCharacterDetails(${num})">
                <img src="${this.img}" class="imgCart"/>
                <div class="infoCart">
                    <h2 class="titleCart">${this.name}</h2>
                </div>
            </button>
        </div>
        `;
    }
}
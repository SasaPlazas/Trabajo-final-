class ValorantCharacter {
    constructor (img, name, description , abilitie, abilitieDescription, imgAbilitie) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.abilitie = abilitie;
        this.abilitieDescription = abilitieDescription;
        this.imgAbilitie = imgAbilitie;
    }

    // Getters

    toHTML(){
        return `
        
        `
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

    getAbilitie() {
        return this.abilitie;
    }

    getAbilitieDescription() {
        return this.abilitieDescription;
    }

    getImgAbilitie() {
        return this.imgAbilitie;
    }
}
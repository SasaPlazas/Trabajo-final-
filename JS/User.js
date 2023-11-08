export class User {
    constructor (username, email, password, phone, favorites) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.favorites = favorites;
    }

    // Getters
    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getPhone() {
        return this.phone;
    }

    getFavorites() {
        return this.favorites;
    }

    // Setters
    setUsername(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    addFavorites(ValorantCharacter){
        this.favorites.unshift(ValorantCharacter)
    }

    deleteFavorites(index){
        delete(this.favorites[index])
    }

    sortFavorites(){
        this.favorites.sort();
    }

    changeToCircle(password) {
        let passwordCircle = '';
        for (let i = 0; i < password.length; i++) {
            passwordCircle += '●';
        }
        return passwordCircle;
    }

    toHTMLUser() {
        return `
        <div id="infoUser">
            <input id="username" type="text" placeholder="${this.username}">
            <input type="text" placeholder="${this.email}" disabled>
            <input type="password" placeholder="${this.changeToCircle(this.password)}" disabled>
            <input id="phone" type="tel" style="margin-bottom: 200px:" placeholder="${this.phone}" pattern="[0-9]{10}">
        </div>
        `
    }
}
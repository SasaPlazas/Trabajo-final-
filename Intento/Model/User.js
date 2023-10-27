class User {
    favorites = [];

    constructor (username, birthDate, email, password, favorites) {
        this.username = username;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.favorites = favorites;
    }

    toHTMLUser() {
        
    }

    // Getters
    getUsername() {
        return this.username;
    }

    getBirthDate() {
        return this.birthDate;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getFavorites() {
        return this.favorites;
    }

    // Setters
    setUsername(username) {
        this.username = username;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
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
}
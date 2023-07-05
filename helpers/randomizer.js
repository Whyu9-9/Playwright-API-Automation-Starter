import fetch from "node-fetch";

class Randomizer {
    constructor() {
        this.wordApiUrl = "https://random-word-api.herokuapp.com/word?number=1";
    }

    async randomWord() {
        try {
            const response = await fetch(this.wordApiUrl);
            const words = await response.json();
            return words[0].toUpperCase();
        } catch (error) {
            console.error(error);
        }
    }

    async randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Randomizer
import fetch from "node-fetch";

class Randomizer {
    private wordApiUrl: string;

    constructor() {
        this.wordApiUrl = "https://random-word-api.herokuapp.com/word?number=1";
    }

    async randomWord(): Promise<string> {
        try {
            const response = await fetch(this.wordApiUrl);
            const words: string[] = await response.json();
            return words[0].toUpperCase();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async randomNumber(min: number, max: number): Promise<number> {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Randomizer;
import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name, breed) {
        super(name, breed);
        this.name = name;
        this.breed = breed;
        this.animalType = 'fish';
        this.fincount = 7;
        this.sound = 'wish';
        this.emoji = '🐟';
        this.emojiCount = 3;
    }
}
import { Animal } from "./Animal.js";

export class Fish extends Animal {
    constructor(name, breed) {
        super(name, breed);
        this.name = name;
        this.animalType = 'fish';
        this.fincount = 3;
        this.sound = '';
        this.emoji = '🐟';
        this.emojiCount = 1;
    }
}
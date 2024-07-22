import { Pet } from "./Pet.js";

export class Cat extends Pet {

    constructor(name) {
        super(name);
        this.animalType = 'cat';
        this.sound = 'Miau';
        this.emoji = '🐈';
        this.emojiCount = 2;
    }
}
import { Pet } from "./Pet.js";

export class Cat extends Pet {

    constructor(name, breed) {
        super(name, breed);
        this.animalType = 'cat';
        this.sound = 'Miau';
        this.emoji = '🐈';
        this.emojiCount = 2;
    }
}
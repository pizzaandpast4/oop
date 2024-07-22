import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor(name, breed) {
        super(name);
        this.name = name;
        this.breed = breed;
        this.legsCount = 4;
        this.animalType = '';
        this.sound = 'squeak';
        this.emoji = '🐹';
        this.emojiCount = 10;
    }
}
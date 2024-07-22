import { Fish } from "./Fish.js";

export class Dolphin extends Fish {
    constructor(name, breed) {
        super(name, breed);
        this.breed = breed;
        this.name = name;
        this.animalType = 'fish';
        this.fincount = 3;
        this.sound = 'eEeEeE';
        this.emoji = '🐬';
        this.emojiCount = 2;
    }
}
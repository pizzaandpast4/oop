import { Bird } from "./Bird.js";

export class Pidgeon extends Bird {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.name = name;
        this.animalType = 'bird';
        this.wingCount = 2;
        this.sound = 'uuu';
        this.emoji = '🕊';
        this.emojiCount = 3;
    }
}
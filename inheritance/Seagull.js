import { Bird } from "./Bird.js";

export class Seagull extends Bird {
    constructor(name, breed) {
        super(name, breed);
        this.breed = breed;
        this.name = name;
        this.animalType = 'bird';
        this.wingCount = 2;
        this.sound = 'aaaaaa';
        this.emoji = '🦢';
        this.emojiCount = 1;
    }
}
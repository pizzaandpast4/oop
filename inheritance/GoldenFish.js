import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'golden fish';
        this.fincount = 7;
        this.sound = 'wish';
        this.emoji = '🐟';
        this.emojiCount = 3;
    }
}
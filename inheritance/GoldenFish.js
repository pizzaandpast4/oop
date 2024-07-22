import { Fish } from "./Fish.js";

export class GoldenFish {
    constructor(name) {
        this.name = name;
        this.animalType = 'golden fish';
        this.fincount = 7;
        this.sound = 'wish';
        this.emoji = '🐟';
        this.emojiCount = 3;
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}!`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }

}
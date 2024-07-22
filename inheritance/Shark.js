import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'shark';
        this.fincount = 3;
        this.sound = 'rrr';
        this.emoji = '🦈';
        this.emojiCount = 1;
    }
}
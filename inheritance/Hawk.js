import { Bird } from "./Bird.js";

export class Hawk extends Bird {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'bird';
        this.wingCount = 2;
        this.sound = 'fffffff';
        this.emoji = '🦅';
        this.emojiCount = 1;
    }
}
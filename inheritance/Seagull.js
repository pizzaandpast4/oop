import { Bird } from "./Bird.js";

export class Seagull extends Bird {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'bird';
        this.wingCount = 2;
        this.sound = 'aaaaaa';
        this.emoji = '🦢';
        this.emojiCount = 1;
    }
}
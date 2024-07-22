import { Fish } from "./Fish.js";

export class Dolphin extends Fish {
    constructor(name) {
        super(name);
        this.name = name;
        this.animalType = 'dolphin';
        this.fincount = 3;
        this.sound = 'eEeEeE';
        this.emoji = '🐬';
        this.emojiCount = 2;
    }
}
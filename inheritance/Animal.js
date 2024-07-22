export class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    intro() {
        return `Hello, I am a ${this.animalType} and my name is ${this.name}!`;
    }

    voice() {
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)} - ${this.breed}`;
    }

}
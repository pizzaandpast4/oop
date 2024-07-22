import { Dog } from "./inheritance/Dog.js";
import { Cat } from "./inheritance/Cat.js";

console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalas');
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.voice());
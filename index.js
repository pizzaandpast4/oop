import { Dog } from "./js/Dog.js";

const rexas = new Dog('Rexas', 'black', 3);
console.log(rexas);
console.log(rexas.hi());
console.log(rexas.think());
console.log(rexas.addNumbers(1, 3));
console.log(rexas.addNumbers(-1, 3));
console.log(rexas.addNumbers(-1, -3));
console.log(rexas.addNumbers(-1, 1));
console.log(rexas.manyBones(10));

console.clear();

const brisius = new Dog('Brisius', 'white', 2);
console.log(brisius);

console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());
console.log(brisius.lostLeg());

console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(brisius.birthday());

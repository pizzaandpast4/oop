import { Dog } from "./inheritance/Dog.js";
import { Cat } from "./inheritance/Cat.js";
import { GoldenFish } from "./inheritance/GoldenFish.js";
import { Shark } from "./inheritance/Shark.js";
import { Hamster } from "./inheritance/Hamster.js";
import { Dolphin } from "./inheritance/Dolphin.js";
import { Hawk } from "./inheritance/Hawk.js";
import { Seagull } from "./inheritance/Seagull.js";
import { Pidgeon } from "./inheritance/Pidgeon.js";


console.clear();

const rexas = new Dog('Rex', 'aviganis');
console.log(rexas.voice());

const brisius = new Dog('Brisius', 'taksas');
console.log(brisius.voice());

const rainis = new Cat('Rainis', 'bengalas');
console.log(rainis.voice());

const tom = new Cat('Tom', 'animacinis');
console.log(tom.voice());

const bob = new Hamster('Bob', 'angora');
console.log(bob.voice());

const nemo = new GoldenFish('Nemo')
console.log(nemo.voice());

const oliver = new Shark('Oliver')
console.log(oliver.voice());

const splash = new Dolphin('Splash')
console.log(splash.voice());

const jack = new Hawk('Jack')
console.log(jack.voice());

const frank = new Seagull('Frank')
console.log(frank.voice());

const valera = new Pidgeon('Valera')
console.log(valera.voice());
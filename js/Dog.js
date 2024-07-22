export class Dog {
    constructor(name, furColor, age) {
        this.name = name;
        this.furColor = furColor;
        this.age = age;
        this.legsCount = 4;
        this.hasTail = true;
    }

    birthday() {
        this.age++;
        return `Suns ${this.age} gimtadienis! 🥳`;
    }

    lostLeg() {
        if (this.legsCount === 0) {
            return `Suo jau turi 0 (nuli) koju... daugiau negalima prarasti`;
        }
        this.legsCount--;
        return `Suo prarado koja... 😢`;
    }

    hi() {
        return 'Suo sako: au au au!!';
    }

    think() {
        return 'Suo galvoja: 🦴🦴🦴'
    }

    addNumbers(a, b) {
        if (a + b < 0) {
            return 'Suo yra liudnas, negali suskaiciuoti negatyvaus kaulu kiekio :(';
        }

        if (a + b === 0) {
            return 'Suns reakcija 👀';
        }

        return `Suo suskaiciavo ${a} + ${b} = ${'🦴'.repeat(a + b)}.`;
    }

    manyBones(count) {
        return `Many bones: ${'🦴'.repeat(count)}.`;
    }

}


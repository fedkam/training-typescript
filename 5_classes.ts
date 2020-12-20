// вариант 1
class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel; // только в конструкторе класса возможно изменять model
    }
}

// вариант 2
class Car2 {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

// модификаторы protected, public, private
class Animal {
    protected voice: string = ''; // наследуется
    public color: string = 'black';

    private go() {
        console.log('go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}
let cat = new Cat();

// абстрактные классы
abstract class AbstractExaple {
    abstract render(): void;
    abstract info(): string;
}

class AppAbstractExaple extends AbstractExaple {
    render(): void {}
    info(): string {
        return '';
    }
}

interface Rect {
    readonly id: string,    //только для чтения, обязательное
    color?: string,         //не обязательное
    size: {
        width: number,
        height: number
    }                       //обязательное
}

const obj1: Rect = {
    id: '1',
    size: { height: 1, width: 2 }
}
obj1.color = 'black';

const obj2 = {} as Rect;    //строгое приведение к типу



//наследование 
interface RectWithArea extends Rect {
    getArea: () => number   //возввращаемый тип
}

const obj3: RectWithArea = {
    id: '1',
    size: { height: 1, width: 2 },
    getArea(): number {
        return this.size.height * this.size.width
    }
}



//наследование классов (implements)
interface iClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements iClock {
    time = new Date()
    setTime(date) {
        this.time = date
    }
}



// interface с динамическими клоючами
interface Styles {
    [key: string]: string
}
const css: Styles = {
    padding: '10px',
    magin: '10px'
}
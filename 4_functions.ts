
interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPosition2 extends MyPosition {
    default: string
}

//перегрузка функций
function position(): MyPosition;
function position(a: number): MyPosition2;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) return { x: undefined, y: undefined }
    if (a && !b) return { x: a, y: undefined, default: a.toString() }
    return { x: a, y: b }
}

console.log('position()=', position());
console.log('position(5)=', position(5));
console.log('position(5,2)=', position(5, 2));
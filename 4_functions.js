function position(a, b) {
    if (!a && !b)
        return { x: undefined, y: undefined };
    if (a && !b)
        return { x: a, y: undefined, "default": a.toString() };
    return { x: a, y: b };
}
console.log('position()=', position());
console.log('position(5)=', position(5));
console.log('position(5,2)=', position(5, 2));

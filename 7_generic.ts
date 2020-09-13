const arr1: Array<number> = [1, 2, 3, 4]
const arr2: Array<string> = ['a', 'b', 'c']

function reverce<T>(array: T[]): T[] {
    return array.reverse()
}
reverce(arr1)
reverce(arr2)
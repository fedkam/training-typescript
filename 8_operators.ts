interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person;


let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}


// вариант 1 исключаем лишненее
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// вариант 2 забираем нужное
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name'
let u2: UserKeysNoMeta2 = { name: '', email: '' }


// boolean
const isFetching: boolean = true;
const isLoading: boolean = false;

// number
const int: number = 42;
const float: number = 42.7;
const num: number = 3e10;

// string
const str: string = 'str';

// array
const numberArr: number[] = [1, 1, 2]; // 1-й тип объявления с []
const stringArr: string[] = ['a', 'b', 'c']; // 1-й
const numberArr2: Array<number> = [1, 1, 2]; // 2-й тип объявления generic (файл №7)

// tuple - определяют массивы с фикс колвом элем и с определенными type  на каждом
const fixArray: [string, number] = ['a', 1];

// any
let valueAny: any = 1;
valueAny = '';
valueAny = [];

// function
function sayMyName(name: string): number {
    return 0;
} //обязательно указать тип возвращяемого значения
sayMyName('');

// never - либо когда функция return error либо когда функция никогда не завершится(бесконечная рекурсия ....)
function throwErrorFunc(mess: string): never {
    throw new Error(mess);
}
function infinityFunc(mess: string): never {
    while (true) {}
}

// type - собственные типы
type Login = string;
const login: Login = 'admin';
//разные типы данных
type ID = string | number;
let id1: ID = 124;
id1 = 'abc';

// null and undefined
let u: undefined = undefined;
let n: null = null;

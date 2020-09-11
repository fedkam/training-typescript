enum Enumm {
    slovo0,
    slovo1,
    slovo2
}

const enumm = Enumm.slovo1; // 1
const enummName = Enumm[1]; // slovo1



enum Enumm2 {
    slovo00 = 'string_slovo0',
    slovo11 = 'string_slovo1',
    slovo22 = 'string_slovo2'
}
const enumm2 = Enumm2.slovo11; // string_slovo1
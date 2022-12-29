// Ваша задача состоит в том, чтобы посчитать количество букв E и R, регистр не учитывать (т.е. E=e, R=r). 
// В строке, помимо E и R, могут также встречаться и любые другие символы. 

const countOfEandR = (s) => {
    s = s.toLowerCase();
    let sumE = 0;
    let sumR = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'e') sumE++
        if (s[i] == 'r') sumR++
    }
    return `e: ${sumE}, r: ${sumR}`
}

// tests
console.log(countOfEandR('preparation')) // e: 1, r: 2
console.log(countOfEandR('pppprrrrreerprppreerrrrrrxx__pppp')) // e: 4, r: 14
console.log(countOfEandR('rrrrreeeeeeeeeeeeeerrrrrrrrrrr')) // e: 14, r: 16
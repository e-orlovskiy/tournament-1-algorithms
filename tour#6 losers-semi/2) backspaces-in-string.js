// Написать функцию, которая получает строку, содержащую в себе разные буквы и символы.
// Символ '#' в строке работает так, как будто мы нажимаем клавишу Backspace на клавиатуре когда его видим.
// Следовательно элемент, перед которым эта клавиша была нажата должен удаляться(как и символ #).
// Функция должна возвращать преобразованную строку.

const cleanString = (s) => s.split('').reduce((str, el) => el == '#' ? str.slice(0, -1) : str + el, '')

console.log(cleanString('abc#d##c')) //ac
console.log(cleanString('aa#####')) //'' 
console.log(cleanString('#####')) //''
console.log(cleanString('##')) //''
console.log(cleanString('aaaa#ddc#3?e##')) //aaadd3
console.log(cleanString('1#1#2#3#4#5')) //5
console.log(cleanString('1#1#2#3#4#5#')) //''
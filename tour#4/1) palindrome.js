// Ваша задача заключается в том, чтобы определить является слово палиндромом или нет. 
// Палиндром - это слово, которое одинаково читается как слева направо так и справа налево.

const isPalindrome = (str) => str.toLowerCase() == str.toLowerCase().split('').reverse().join('')

// tests
console.log(isPalindrome('шалаш')) //true
console.log(isPalindrome('дед')) //true
console.log(isPalindrome('скалка')) //false
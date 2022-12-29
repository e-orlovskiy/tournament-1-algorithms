// Ваша задача состоит в том, чтобы реализовать генератор хештегов, который работает следующим образом:
// 1. удаляет все пробелы
// 2. Первое и каждое новое слово должны начинаться с большой буквы
// 3. В начало строки добалять '#'
// 4. Если длина строки больше 140 или там нет символов (только пробелы) - возвращать false.

const generateHashtag = (str) => {
    str = str.split(' ').map(word => (word) ? word[0].toUpperCase() + word.slice(1) : '').join('');
    return (str && str.length <= 139) ? '#' + str : false;
}

// tests
console.log(generateHashtag('    Hello     World   '))
//#HelloWorld
console.log(generateHashtag(' Hello there thanks for participating in the tournament '))
// #HelloThereThanksForParticipatingInTheTournament
console.log(generateHashtag('   '))
// true
console.log(generateHashtag('code    waars'))
// #CodeWaars
console.log(generateHashtag('Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))
// false
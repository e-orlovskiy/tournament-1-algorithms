// Интернет-тролли решили заспамить ваш веб-сайт оскорбительными комментариями, 
// Ваша задача: отредактировать коммент каждого из них таким образом, чтобы перед их сообщением появилась строка 
// "Я слаборазвитый диванный эксперт, вот мой коммент: ", а само их сообщение лишилось гласных букв.

const trollAttack = (str) => {
    return 'Я слаборазвитый диванный эксперт, вот мой коммент: ' + str.replace(/[аоуыэяюёе]/gi, '')
}

// tests
console.log(trollAttack('ЛОЛ, этот сайт полная фигня'))
// Я слаборазвитый диванный эксперт, вот мой коммент: ЛЛ, тт сйт плн фигн
console.log(trollAttack('как-то раз моя бабушка случайно села на мой ноут, так даже там результат был лучше чем твой сайт'))
// Я слаборазвитый диванный эксперт, вот мой коммент: кк-т рз м ббшк слчйн сл н мй нт, тк дж тм рзльтт бл лчш чм твй сйт
console.log(trollAttack('я сейчас положил пятку на клаву и кажется что-то произошло, добавишь это на свой сайт как обнову? :D'))
// Я слаборазвитый диванный эксперт, вот мой коммент:  сйчс плжил птк н клв и кжтс чт-т призшл, дбвишь т н свй сйт кк бнв? :D
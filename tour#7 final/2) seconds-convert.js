// Написать функцию, которая получает положительное целое число (секунды) и возвращает их в формате времени:
// HH:MM:SS
// HH = часы, максимальный диапазон: 00 - 99
// MM = минуты, максимальный диапазон: 00 - 59
// SS = секунды, максимальный диапазон: 00 - 59
// Максимально допустимое время никогда не будет превышать 359999 секунд (99:59:59)
// Чтобы задание было засчитано, необходимо выполнить все примеры ниже.


const secondsConvert = (seconds) => {

    let HH = Math.floor(seconds / 3600)
    let MM = Math.floor((seconds - (HH * 3600)) / 60)
    let SS = Math.floor(seconds - (HH * 3600 + MM * 60))

    return `${('0' + HH).slice(-2)}:${('0' + MM).slice(-2)}:${('0' + SS).slice(-2)}`
}

console.log(secondsConvert(116))    //00:01:56
console.log(secondsConvert(359999)) //99:59:59
console.log(secondsConvert(69319))  //19:15:19
console.log(secondsConvert(3599))   //00:59:59
console.log(secondsConvert(45))     //00:00:45
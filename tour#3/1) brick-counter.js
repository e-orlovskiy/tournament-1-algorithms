// Поздравляю, Вы сегодня строитель, перед вами стоит задача заполнить ряд одной из стен,
// длина которой равна параметру wallLength, строительными блоками. 
// Вы можете использовать строительные блоки любой длины, но не больше чем значение параметра brickMaxLength,
// блоки не должны выпирать из стены, то есть, если последний блок не влезет и окажется слишком большим,
// нужно будет взять блок поменьше. Необходимо вернуть массив с длинами блоков для вашей стены.

const fillWall = (wallLength, brickMaxLength) => {
    let wall = [];
    let sum = Math.floor(wallLength / brickMaxLength);

    for (let i = 0; i < sum; i++) { wall.push(brickMaxLength) }
    if (wallLength - (sum * brickMaxLength) > 0) wall.push(wallLength - (sum * brickMaxLength))

    return wall
}

// tests
console.log(fillWall(100, 18)) //[ 18, 18, 18, 18, 18, 10 ]
console.log(fillWall(17, 5)) //[ 5, 5, 5, 2 ]
console.log(fillWall(36, 10)) //[ 10, 10, 10, 6 ]
console.log(fillWall(50, 13)) //[ 13, 13, 13, 11 ]
console.log(fillWall(100, 25)) //[ 25, 25, 25, 25 ]

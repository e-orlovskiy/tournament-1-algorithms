// Вы занимаетесь анализом фондовой биржи, ваша задача состоит в том, 
// чтобы на основании цен в определенные периоды времени посчитать
// максимальный возможный профит с покупки и продажи акций. 
// Т.е. за какую цену их нужно было купить, чтобы потом продать как можно дороже.

const checkMaxProfit = (prices) => {
    let minPrice = prices[0];
    let maxPrice = Math.max(...prices.slice(1,));
    let profit = maxPrice - minPrice;
    for (let i = 0; i < prices.length; i++) {
        if (profit <= 0 || profit < Math.max(...prices.slice(i,)) - prices[i]) {
            minPrice = prices[i];
            maxPrice = Math.max(...prices.slice(i,));
            profit = maxPrice - minPrice;
        }
    }
    return profit > 0
        ? `Покупка: ${minPrice}; Продажа ${maxPrice}; Профит: ${profit}`
        : `Невозможно получить профит`;
}

// tests
console.log(checkMaxProfit([16, 5, 5, 6, 16, 3])) // Покупка: 5; Продажа 16; Профит: 11
console.log(checkMaxProfit([1, 5, 5, 6, 16, 3])) // Покупка: 1; Продажа 16; Профит: 15
console.log(checkMaxProfit([19, 5, 5, 6, 16, 3])) // Покупка: 5; Продажа 16; Профит: 11
console.log(checkMaxProfit([19, 50, 33, 6, 1, 60])) // Покупка: 1; Продажа 60; Профит: 59
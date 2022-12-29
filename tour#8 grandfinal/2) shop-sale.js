// Вы администратор книжного магазина, перед вами стоит несколько задач: 
// 1. привести в порядок список книг, отсортировав их по году выпуска
// 2. если книга повторяется несколько раз, то добавить ей свойство "quantity" и указать в нём количество таких книг
// 3. книги, которых в магазине больше или 3, должны продаваться со скидкой. Скидка = -20% от первоначальной стоимости книги 
// Функция должна вернуть измененный массив книг.

const booksEdit = (books) => {
    books.sort((a, b) => a.year - b.year)
    books = books.map(book => JSON.stringify(book))
    let booksWithQty = books.map(el => {
        if (books.indexOf(el) != books.lastIndexOf(el)) {
            el = JSON.parse(el);
            el.quantity = 1;
            return el;
        }
        else {
            return JSON.parse(el)
        }
    })

    for (let i = 0; i < booksWithQty.length - 1; i++) {
        if (booksWithQty[i].title == booksWithQty[i + 1].title) {
            booksWithQty[i].quantity++;
            booksWithQty.splice(i + 1, 1);
            i--;
        }
    }

    for (let i = 0; i < booksWithQty.length; i++) {
        if (booksWithQty[i].quantity >= 3) {
            booksWithQty[i].price = Math.ceil(booksWithQty[i].price.slice(0, -2) - booksWithQty[i].price.slice(0, -2) * 0.2) + 'р.';
        }
    }
    return booksWithQty;
}


console.log(booksEdit([
    { title: "Зелёная Миля", year: 1996, price: "25р." },
    { title: "Зов Ктулху", year: 1928, price: "15р." },
    { title: "Зелёная Миля", year: 1996, price: "25р." },
    { title: "Оно", year: 1986, price: "22р." },
    { title: "Властелин Колец", year: 1954, price: "35р." },
    { title: "Оно", year: 1986, price: "22р." },
    { title: "Гарри Поттер 1", year: 1997, price: "30р." },
    { title: "Великий Гэтсби", year: 1925, price: "30р." },
    { title: "Зов Ктулху", year: 1928, price: "15р." },
    { title: "Зов Ктулху", year: 1928, price: "15р." },
    { title: "Война и Мир", year: 1867, price: "45р." },
    { title: "1984", year: 1948, price: "20р." },
    { title: "1984", year: 1948, price: "20р." },
    { title: "Зов Ктулху", year: 1928, price: "15р." },
    { title: "Властелин Колец", year: 1954, price: "35р." },
    { title: "Властелин Колец", year: 1954, price: "35р." },
    { title: "Зелёная Миля", year: 1996, price: "25р." },
    { title: "Гарри Поттер 1", year: 1997, price: "30р." },
    { title: "Зелёная Миля", year: 1996, price: "25р." },
    { title: "Зов Ктулху", year: 1928, price: "15р." },
]))
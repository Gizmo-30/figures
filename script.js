let a = +prompt('Введите высоту')
let b = +prompt('Введите ширину')

figures(a, b)

function figures(h, w) {
    let res = 0
    if (h > w || h < w) {
        res = (h + w) * 2
        console.log(`Периметр прямоугольники равно ${res}`);
    } else {
        res = h * w
        console.log(`Площадь квадрата равна ${res}`);
    }
    return
}


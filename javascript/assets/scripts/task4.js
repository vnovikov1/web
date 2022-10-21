function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// var idx = getRandomIntInclusive(0, 4);

function paint_div() {
    var idx = getRandomIntInclusive(0, 4);
    document.querySelectorAll('.square')[idx].style.backgroundColor = '#' + ((1 << 24) * Math.random() | 0).toString(16);
}

setInterval(paint_div, 150);
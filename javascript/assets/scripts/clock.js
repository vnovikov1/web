var clock = document.getElementById('clock');
var date = document.getElementById('date');
// var color = document.getElementById('color');

function scriptClock() {
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s;
    // var colorString = '#' + h + m + s;

    clock.textContent = clockString;
    // color.textContent = colorString;

    // let backgroundColor = document.getElementById('clockbody');
    // backgroundColor.style.background = colorString;
}

function scriptDate() {
    var date1 = new Date();
    var d = date1.getDate();
    var m = date1.getMonth();
    var y = date1.getFullYear();

    m = m + 1;

    if (d < 10) {
        d = '0' + d;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (y < 10) {
        y = '0' + y;
    }

    var dateString = d + '.' + m + '.' + y;

    date.textContent = dateString;
}

scriptClock();
scriptDate();
setInterval(scriptClock, 1000);
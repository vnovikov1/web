window.onload = function() { // когда страница загрузилась грузится скрипт
    var a = document.getElementById('switch');

    a.onclick = function() {
        let text_p = ""

        while (text_p !== null) {
            text_p = prompt('Введите содержимое абзаца: ')
            let create_p = document.createElement('p');
            create_p.innerHTML = text_p;
            document.getElementById("task_5").prepend(create_p);
        }
    }
}
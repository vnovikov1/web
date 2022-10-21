let count_element = document.querySelector('#count_img_text');

let n = 0;
let k = 0;

let body_childs = document.body.children;
let all_div = []

for (let i = 0; i < body_childs.length; i++) {
    if (body_childs[i].tagName == "DIV") {
        all_div[n] = body_childs[i];
        n++;
    }

    if (body_childs[i].tagName == "IMG") {
        k++;
    }
}


for (let i = 0; i < all_div.length; i++) {
    for (let j = 0; j < all_div[i].children.length; j++) {
        if (all_div[i].children[j].tagName == "IMG") {
            k++;
        }
    }
}

count_element.textContent = "Количество IMG: " + k;
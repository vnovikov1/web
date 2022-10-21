var i = 0;
var imgarr = new Array();

imgarr[0] = "./assets/images/task6/1.jpg";
imgarr[1] = "./assets/images/task6/2.jpg";
imgarr[2] = "./assets/images/task6/3.jpg";
imgarr[3] = "./assets/images/task6/4.jpg";

function change() {
    if (i > imgarr.length - 1) { i = 0 }
    document.getElementById("task6_img").src = imgarr[i];
    i++;
}
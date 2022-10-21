// var my_div = document.getElementsByClassName("del1");
// my_div.onclick = function(e) {
//     e.target.alert(e);
// };

$("document").ready(function() {

    // $(".del").click(function() {
    //     $(".submenu").slideToggle("slow");
    //     $(this).toggleClass("active");
    // })

    $(".del1").click(function() {
        $(this).fadeOut(1500);
    })

    $(".del2").click(function() {
        $(this).fadeOut(1500, function() {
            $(".del3").fadeIn(1500);
        });
    })
});

for (let elem of document.querySelectorAll('del')) {
    elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
}
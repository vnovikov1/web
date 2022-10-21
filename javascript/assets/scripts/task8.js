const img = document.querySelector("#task8_img");

task8_img.addEventListener('mouseover', function() {
    img.style.opacity = '0';
})
task8_img.addEventListener('mouseout', function() {
    img.style.opacity = '1';
})
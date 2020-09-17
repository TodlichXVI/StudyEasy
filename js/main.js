var index = 0;
window.setInterval(move, 5000);

function move(n = 1) {
    set(index += n);
}

function set(n){
    var slides = document.getElementsByClassName("pic");
    slides[index-1].style.display = "none";
    if (index == slides.length) {
        slides[0].style.display = "block";
        index = 0;
    }
    else 
        slides[index].style.display = "block";
}

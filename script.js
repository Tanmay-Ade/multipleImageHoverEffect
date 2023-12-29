let elem = document.querySelectorAll(".elem");
let showImg = document.querySelectorAll(".elem img");

elem.forEach(function(val) {
    val.addEventListener("mousemove", function(det){
        val.childNodes[3].style.opacity = 1;
        val.childNodes[3].style.left = det.x + "px";
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    })
})

// elem1.addEventListener("mousemove", function(det){
//     showImg.style.opacity = 1
//     showImg.style.left = det.x + "px"
//     showImg.style.top = det.y + "px"
// })

// elem1.addEventListener("mouseleave", function(det){
//     showImg.style.opacity = 0
// })
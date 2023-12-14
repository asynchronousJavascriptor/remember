const close = document.querySelector("#closebtn");
const overlay = document.querySelector("#overlay");


close.addEventListener("click", function(){
    overlay.style.opacity = 0;
});
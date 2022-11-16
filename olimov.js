const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.btn');

popupBtn.addEventListener("click", function() {
    popup.classList.add("open")
})

popup.addEventListener("click", function(){
    popup.classList.remove("open")
})
const popup = document.querySelector('.popup');
const openBtn = document.querySelector('.btn');

openBtn.addEventListener("click", function() {
    popup.classList.add("open")
})

popup.addEventListener("click", function() {
    popup.classList.remove("open")
})
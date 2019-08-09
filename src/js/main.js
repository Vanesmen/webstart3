let button = document.querySelector("#button1");
let modal = document.querySelector("#modal1");
let close = document.querySelector("#close1");

button.addEventListener("click", function() {
    modal.classList.add("modal_active");
});

close.addEventListener("click", function() {
    modal.classList.remove("modal_active");
});
$(document).ready(function() {
    let button = $("#button1");
    let modal = $("#modal1");
    let close = $("#close1");



    button.on("click", function() {
        modal.addClass("modal_active");
    });

    close.on("click", function() {
        modal.removeClass("modal_active");
    });
});
let $buttons = $(".remove");

$("button").on("click", function () {
    $(".table").append("<h3>" + $("input").val() + "</h3>");
});

$(".table").on("click", "h3", function() {
    $(this).closest("h3").fadeOut()

});


//Add New Skill to unordered list
$("#addSkill").on("click", function(){
    let $input = $("input").val();
    $(".skills").append(`<li><button class ="remove">X</button>${$input}</li>`)
        $input;
});


//Remove skill from unordered list
$(".skills").on("click", "button", function(){
    $(this).closest("li").fadeOut(function(){
        $(this).remove();
    });
});
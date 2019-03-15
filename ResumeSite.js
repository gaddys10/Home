var bio = $('#bio');
var window = $(window);
bio.css("color", "white");
//sanity check


$(document).on("scroll", function(){
    if(window.scrollY > 570){
        bio.addClass("animate");
    }
});

$('#reserveButton').on("click", function(){
    $('$formContainer').innerHTML
    = "<h3 id = 'requestTitle'> Thank you for requesting a session </h3";
}

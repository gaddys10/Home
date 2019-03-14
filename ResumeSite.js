var bio = $('#bio');
var window = $(window);
bio.css("color", "white");
//sanity check


$(document).on("scroll", function(){
    if(window.scrollY > 570){
        bio.addClass("animate");
    }
});


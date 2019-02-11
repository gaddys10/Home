var $window = $("window");
var $bio = $("#bio");

if($window.scrollTop > 200){
    console.log("animate");
    $bio.style.animation = 'appear2';
    $bio.style.animationiterationcount: 1;
    $bio.style.animationduration: 2s;
    $bio.style.animationfillmode: 'forwards';
}

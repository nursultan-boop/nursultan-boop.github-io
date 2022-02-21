

//name of subjects in the main_reg
$( '.phoneName:eq(0)' ).html("Realme GT ME" );
$( '.panel-body:eq(0)' ).html("Designed by Naoto Fukasawa" );

$( '.phoneName:eq(1)' ).html("Iphone 12 Pro" );
$( '.panel-body:eq(1)' ).html("The best phone in the world!" );

$( '.phoneName:eq(2)' ).html("Samsung Galazy A5" );
$( '.panel-body:eq(2)' ).html("Nice phone for it's cost" );

$( '.phoneName:eq(3)' ).html("Samsung Galaxy Fold" );
$( '.panel-body:eq(3)' ).html("We new world come new technologies" );

$( '.phoneName:eq(4)' ).html("Meizu Mi6 Pro" );
$( '.panel-body:eq(4)' ).html("The legendary phone of the past" );

$( '.phoneName:eq(5)' ).html("Huawei P50 Pro ");
$( '.panel-body:eq(5)' ).html("The best cameraphone in the work" );

$(document).ready(function(){
    $(".thumbnail").hover(function(){
        $(this).css({"border": "1px solid red", "transition": "border 0.2s linear"});
    }, function(){
        $(this).css("border", "1px solid #ddd");
    });
});

function playMus() {
    var f = document.getElementById('sss');
    f.play();
}


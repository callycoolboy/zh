function codeAddress() {
$("#page2").hide();
   //onLoad();         
 // $( ".swiper-container" ).fadeOut( 100 ).delay( 12000 ).fadeIn( 3000 );
 
var duration = 7000;
    setTimeout(function() {
$("#carl2").show();
$("#carl").fadeOut( 1500 );
$( ".swiper-container" ).fadeOut( 1000 ).delay( 5000 ).fadeIn( 1000 );
//$( ".swiper-container" ).show();
$("#carl2").fadeOut( 5000 );
$( "#modal" ).fadeOut( 1000 ).delay( 7000 ).fadeIn( 1000 );

}, duration);

var duration2 = 7000;
    setTimeout(function() {  
 //checkNetConnection();  
 }, duration2);
	 }
window.onload = codeAddress;

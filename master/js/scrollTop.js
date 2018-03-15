//nav scrollTop function
$(document).ready(function() {
 $('#project').on('click',function(){ //scrollTop for post-one nav ID
   $('html,body').animate({         //call animatemation function
     scrollTop: $('#postOne').offset().top //select section ID
   })
 })

$('#agile').on('click',function(){ // scrollTop for post-two
   $('html,body').animate({
     scrollTop: $('#postTwo').offset().top
   })
 })

$('#lean').on('click',function(){ // scrollTop for post-three
   $('html,body').animate({
     scrollTop: $('#postThree').offset().top
   })
 })

});//end

/*ScrollTop End*/

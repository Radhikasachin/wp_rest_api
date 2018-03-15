//section
//mouseout function and mouseover function for section tag
$(document).ready(function(){  //call function
    $("section").mouseover(function(){ // select mouseover function
        $("section").css("background-color", "#e6fff7");// style it
    });//end mouseover
    $("section").mouseout(function(){ //select mouseout function
        $("section").css("background-color", "#d9d9d9");//style it.
    }); //end mouseout
});// end function

 //end section


//loop In jquery for p tag sets their color property.

$( document.body ).click(function() { //click function
  $( "p" ).each(function( i ) {
    if ( this.style.color !== "black" ) { //if statment
      this.style.color = "black";
    }
    else {                           //Else
      this.style.color = "#02558c";
    }
  });
});

//End loop

//nav
//mouseover function and change color on hover for nav bar

$(document).ready(function(){  //call function
    $("#project").mouseover(function(event){ // select mouseover function
        $("#project").css("background-color", "rgba(255,255,255, 0.6)");// style it
    });//end mouseover
    $("#project").mouseout(function(event){ //select mouseout function
        $("#project").css("background-color", "#111");//style it.
    }); //end mouseout
});// end function

$(document).ready(function(){  //call function
    $("#agile").mouseover(function(event){ // select mouseover function
        $("#agile").css("background-color", "rgba(255,255,255, 0.6)");// style it
    });//end mouseover
    $("#agile").mouseout(function(event){ //select mouseout function
        $("#agile").css("background-color", "#111");//style it.
    }); //end mouseout
});// end function

$(document).ready(function(){  //call function
    $("#lean").mouseover(function(event){ // select mouseover function
        $("#lean").css("background-color", "rgba(255,255,255, 0.6)");// style it
    });//end mouseover
    $("#lean").mouseout(function(event){ //select mouseout function
        $("#lean").css("background-color", "#111");//style it.
    }); //end mouseout
});// end function

//nav end

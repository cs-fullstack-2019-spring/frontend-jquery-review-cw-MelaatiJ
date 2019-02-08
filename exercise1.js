$("button:first").on("click", function greenborder()              //this puts a green border around all my paragraphs
{   var num=0;
    $("p").toggleClass("greenBorder").each(function(){             //when you click the button again it goes away
        num++                                                                 //my counter


    });

    alert("The number of paragraphs in this document is " + num)      //alerts the user how many paragraphs
});


$("button:nth-of-type(2)").on("click", function redBorder()        //this puts a red border around all my paragraphs
{   var num=0;
    $("div:first > p").toggleClass("redBorder").each(function(){    //when you click the button again it goes away
        num++                                                               //my counter
    });

    alert("The number of paragraphs in this document is " + num)           //alerts the user how many paragraphs
});

//calling the third button
$("button:nth-of-type(3)").on("click", function blueBorder()        //this puts a blue border around the paragraphs in the second div
{   var num=0;
    $("div:last > p").toggleClass("blueBorder").each(function(){                  ///last div tag
        num++


    });

    alert("The number of paragraphs in this document is " + num)
});


//the first button is not disabled and the sond button is
$("#btn1").on("click", function(){
    $(this).attr("disabled", "");
    $("#btn2").removeAttr("disabled")
});
//getting the second button to not be disabled
$("#btn2").on("click", function(){
    $(this).attr("disabled", "");
    $("#btn1").removeAttr("disabled")
});


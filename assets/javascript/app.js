//1. there is a delay before timer starts. Why?
//2. for a split second it shows content before hiding. Why?


var rightAnswer = 0;
var wrongAnswer = 0;
var blankAnswer = 0;

var noRepeat = false;

$(".display2").hide();
$(".display3").hide();



// form submital function to be called on timeout or submital
function grade(){
    //cant figure out how to get all checked values without repetitive code | tried using index location with names but couldnt figure out how to use index information with jquery, variables come back as undefined // var i = 1; // var s = i.toString(); | also tried .each() wasnt able to work with that either to create an array to work with.
    
    $(".display2").hide();
    $(".display3").show();

    if ($("input[name= '1']:checked").val() == "true"){
        rightAnswer = rightAnswer + 1;
        

    }
    else if ($("input[name= '1']:checked").val() == "false"){
        wrongAnswer = wrongAnswer + 1;
        
    }
    else {
        blankAnswer = blankAnswer + 1;
        
    };

    if ($("input[name= '2']:checked").val() == "true"){
        rightAnswer = rightAnswer + 1;
        

    }
    else if ($("input[name= '2']:checked").val() == "false"){
        wrongAnswer = wrongAnswer + 1;
       
    }
    else {
        blankAnswer = blankAnswer + 1;
        
    };

    if ($("input[name= '3']:checked").val() == "true"){
        rightAnswer = rightAnswer + 1;
        

    }
    else if ($("input[name= '3']:checked").val() == "false"){
        wrongAnswer = wrongAnswer + 1;
        
    }
    else {
        blankAnswer = blankAnswer + 1;
        
    };

    if ($("input[name= '4']:checked").val() == "true"){
        rightAnswer = rightAnswer + 1;
        
    }
    else if ($("input[name= '4']:checked").val() == "false"){
        wrongAnswer = wrongAnswer + 1;
        
    }
    else {
        blankAnswer = blankAnswer + 1;
        
    };
    
    console.log("r: " + rightAnswer);
    console.log("w: " +  wrongAnswer);
    console.log("u: " +  blankAnswer);

    $("#correct").html(rightAnswer);
    $("#incorrect").html(wrongAnswer);
    $("#unanswered").html(blankAnswer);

};


$("#startBtn").on("click", function() {

    $("#startBtn").hide();
    $(".display2").show();

    var timeLeft = 30;
    // var elem = document.getElementById('some_div');

    var timerId = setInterval(countdown, 1000);

    function countdown() {

        if (noRepeat == true){
            clearTimeout(timerId);
        }
        
        else if (timeLeft == -1) {
            clearTimeout(timerId);
            console.log("test");
            grade();
            
        } 
        else {
            $("#time").html(" " + timeLeft + " ");
            timeLeft--;
        };
    };

});


//cant get submit btn to work properly 
$("#submitBtn").on("click", function submited(){
    // clearTimeout(timerId);
    noRepeat = true;
    grade();
});
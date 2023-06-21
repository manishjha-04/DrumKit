// here addEventListener is used to use  a particular event or function as an event and here below click is something that, on which event that paricular function(handleClick) should be triggered 
// here the querySelector will select the first query of selector button and if querySelectorAll is used it will consider all selectors


// document.querySelector("button").addEventListener("click",handleClick)



// function handleClick()
// {
//     alert("i got clicked")
// }

// for selecting all queries do as below 


// var num =  document.querySelectorAll(".drum").length;
// for(var i=0;i<num;i++)
// {
//     document.querySelectorAll("button")[i].addEventListener("click",handleClick)

// }

// function handleClick()
// {
//     alert("i got clicked")
// }

//  playing sound with anonymous function

var num =  document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        // here below this is basically the identity that which button is being is called - basically we could understand it by saying that "this" is a pointer pointing on the current "i"  in array but this is my imagination for understanding
        // and by using this.innerhtml we could specifically point the innerhtml of that button
    //    console.log(this);.
    
     var buttonInnerHtml = this.innerHTML ;
     makesSound(buttonInnerHtml);
     buttonAnimation(buttonInnerHtml);
 
    
    });
}

    document.addEventListener("keypress",function(event){

        makesSound(event.key);
        buttonAnimation(event.key);


        // here the above code will pass the event property of the key pressed

    });



// detecting button press



    function makesSound(key){
        switch (key) {
            case "w":
                // here below bascially we are creating a object of audio to call the play method to play the sound
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                
                break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play(); 
            break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;
    
         
            default:
                console.log(buttonInnerHtml);
                break;
         }
    }




// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();


// creating a button animation

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
} 
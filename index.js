// document.querySelector("button").addEventListener("click", handleClick);

for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// event listener goes on the entire document
document.addEventListener("keydown", function(KeyBoardEvent){
    console.log(KeyBoardEvent);
    makeSound(KeyBoardEvent.key);
});

function handleClick(){
    

    //we can determine what was clicked by using the this object
// in this way, we can identify and provide the appropriate sound clip
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();


}

// function handleKeyPress(event){
//     alert("Test");
//     console.log(event);
//     makeSound(event.key);
// }

function makeSound(key){
    console.log(key);

    
    // alert("Test");
    //we can determine what was clicked by using the this object
// in this way, we can identify and provide the appropriate sound clip
    // this.style.color = "white";
    // var buttonInnerHTML = this.innerHTML;
    switch (key){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");   
            audio.play();  
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");     
            audio.play();
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");     
            audio.play();
            break;            

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");     
            audio.play();
            break;

        case "j":
            var audio = new Audio("./sounds/snare.mp3");     
            audio.play();
            break;

        case "k":
            var audio = new Audio("./sounds/crash.mp3");     
            audio.play();
            break;
        
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");     
            audio.play();
            break;

        default:
            console.log(key);
    }

    
        // var audio = new Audio("./sounds/tom-1.mp3");
        // audio.play();
}
    

//anonymous function example
// document.querySelector("button").addEventListener("click", 
// function (){
//     alert("I got clicked");
// });


// // general learning about functions as inputs
// function add(num1, num2){
//     return num1 + num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1,num2);
// }
// document.querySelector("button").addEventListener("click", handleClick);

for (var i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
}
function handleClick(){
    alert("I got clicked");
}

//anonymous function example
// document.querySelector("button").addEventListener("click", 
// function (){
//     alert("I got clicked");
// });

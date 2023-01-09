const media = [
    {"id": "w",
    "img":"images/tom1.png",
    "sound":"sounds/tom-1.mp3",},
    {"id": "a",
    "img":"images/tom2.png",
    "sound":"sounds/tom-2.mp3",},
    {"id": "s",
    "img":"images/tom3.png",
    "sound":"sounds/tom-3.mp3",},
    {"id": "d",
    "img":"images/tom4.png",
    "sound":"sounds/tom-4.mp3",},
    {"id": "j",
    "img":"images/crash.png",
    "sound":"sounds/snare.mp3",},
    {"id": "k",
    "img":"images/kick.png",
    "sound":"sounds/kick-bass.mp3",},
    {"id": "l",
    "img":"images/snare.png",
    "sound":"sounds/crash.mp3",}
]

var drumButton = document.querySelectorAll(".drum");


for (var i=0;i<drumButton.length;i++){
    if (drumButton[i].innerHTML == media[i].id){
        drumButton[i].style.backgroundImage = "url("+ media[i].img+ ")";
    }
drumButton[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}


document.addEventListener("keydown", function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
})


function makeSound (key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

         case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
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
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

         case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
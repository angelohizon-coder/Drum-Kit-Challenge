var eventTypes = ["click", "keydown"];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var character = this.innerHTML;
    makeSound(character);
    buttonAnimation(character);
  });
}

document.addEventListener('keydown', logKey);

function logKey(e) {
  var character = e.key;
  makeSound(character);
  buttonAnimation(character);
}

function buttonAnimation(character) {
  var activeButton = document.querySelector("." + character);
  activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
}

function makeSound(character) {
  switch (character) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;

    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;

    default:
      console.log("Wrong Button");
  }
}

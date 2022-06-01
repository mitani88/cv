const buttonColours = new Array("red", "blue", "green", "yellow");
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var clickOrder = 0;
var startGame = false;

function nextSequence() {
  level++;
  clickOrder = 0;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  userClickedPattern = [];
}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function animatePress(currentColour) {
  var header = $("#" + currentColour);

  header.addClass('pressed');
  setTimeout(function() {
    header.removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {} else {

    var audio = new Audio('sounds/wrong.mp3');
    audio.play();
    $("body").addClass('game-over');
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver()
  }

}
if (window.innerWidth < 1028)
{
  $("h1").text("Click here");
  $("h1").on("click", function()
  {
      if (startGame === false)
      {
        nextSequence();
        startGame = true;
      }
  });
}else{
  $("body").on("keydown", function()
  {
      if (startGame === false)
      {
        nextSequence();
        startGame = true;
      }
  });
}

  function startOver() {
    startGame = false;

    level = 0;
    gamePattern = [];
    userClickedPattern = [];
  }

  $(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length) - 1);
    clickOrder++;
    if (level === clickOrder) {
      setTimeout(nextSequence, 1000);
    }

  });

var colors = ["red", "blue", "green", "yellow"];
var pattern = [];
patternUser = [];
var level = 0;
var started = false;


function nextSequence(){
    patternUser = [];
    level++;
    $("#level-title").text("Level: " + level);
    var random = Math.floor(Math.random() * 4);
    var randomColour = colors[random];
    pattern.push(randomColour);
    $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    sound(randomColour);
}

$(".btn").click(function() {
    var decision = $(this).attr("id");
    patternUser.push(decision);
    sound(decision);
    animatePress(decision);
    checkAnswer(patternUser.length-1);
});

function sound(button) {
    var audio = new Audio("sounds/" + button + ".mp3");
    audio.play();
}

function animatePress(button){
    $("#" + button).addClass("pressed");
    setTimeout(function () {
    $("#" + button).removeClass("pressed");
    }, 100);
}

$(document).keypress(function() {
    if (started == false){
        $("#level-title").text("Level: " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel){
    if (pattern[currentLevel] === patternUser[currentLevel]) {
        if (patternUser.length === pattern.length){
            setTimeout(function () {
            nextSequence();
            }, 1000);
        }
      }
    else {
        sound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver(){
    level = 0;
    pattern = [];
    started = false;
}
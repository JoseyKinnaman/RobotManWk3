// Business Logic
function robotSpeak(userInput) {
  var numOutput = [];

  for (var i = 0; i <= userInput; i++) {
    if (i.toString().includes("3")) {
      console.log(i);
      numOutput.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      numOutput.push("Boop!");
    } else if (i.toString().includes("1")) {
      numOutput.push("Beep!");
    } else {
      numOutput.push(" " + i);
    }
  }
  return numOutput;
}

// User interface logic
$(document).ready(function () {
  $("form#formOne").submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var output = robotSpeak(userInput);
    var sound = new Audio(
      "https://freesound.org/data/previews/392/392694_5694371-lq.mp3"
    );
    
    $("#result").text(output);
    $("#result").show();
    sound.play();
    
  });
});
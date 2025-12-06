
function toggleDarkMode() {
  var body = document.body;

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
}


var timeLeft = 600;

function startSaleTimer() {
  setInterval(function() {
    var timerText = document.getElementById("saleTimerText");

    if (!timerText) {
      return;
    }

    if (timeLeft <= 0) {
      timerText.innerText = "Sale has ended!";
      return;
    }

    timeLeft = timeLeft - 1;

    var mins = Math.floor(timeLeft / 60);
    var secs = timeLeft % 60;

    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }

    timerText.innerText = "Sale ends in: " + mins + ":" + secs + " \n isliye jaldi order karlo";
  }, 1000);
}

startSaleTimer();

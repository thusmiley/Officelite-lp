// Monthly/Annually slider
let checkbox = document.getElementById("checkbox");
let monthly = document.getElementsByClassName("monthly");
let annually = document.getElementsByClassName("annually");

checkbox.addEventListener("click", () => {
  for (let i = 0; i < monthly.length; i++) {
    if (checkbox.checked == true) {
      monthly[i].style.display = "none";
      annually[i].style.display = "block";
    } else if (checkbox.checked == false) {
      monthly[i].style.display = "block";
      annually[i].style.display = "none";
    }
  }
});

// Countdown
function timeCalculation(endtime) {
  "use strict";

  let timeTotal = Date.parse(endtime) - Date.parse(new Date()),
    timeSeconds = Math.floor((timeTotal / 1000) % 60),
    timeMinutes = Math.floor((timeTotal / 1000 / 60) % 60),
    timeHours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24),
    timeDays = Math.floor(timeTotal / (1000 * 60 * 60 * 24));

  return {
    total: timeTotal,
    seconds: timeSeconds,
    minutes: timeMinutes,
    hours: timeHours,
    days: timeDays,
  };
}

function getId(id, endtime) {
  "use strict";

  let timeId = document.getElementById(id),
    daySpan = timeId.querySelector(".days"),
    hourSpan = timeId.querySelector(".hours"),
    minSpan = timeId.querySelector(".minutes"),
    secSpan = timeId.querySelector(".seconds");

  function calculate() {
    let timeTotal = timeCalculation(endtime);

    daySpan.innerHTML = timeTotal.days;
    hourSpan.innerHTML = ("0" + timeTotal.hours).slice(-2);
    minSpan.innerHTML = ("0" + timeTotal.minutes).slice(-2);
    secSpan.innerHTML = ("0" + timeTotal.seconds).slice(-2);

    if (timeTotal.total <= 0) {
      clearInterval(now);
    }
  }
  calculate();
  let now = setInterval(calculate, 1000);
}

let targetDate = new Date("2023-04-01T23:59:59Z");
getId("counting", targetDate);

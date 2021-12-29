const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const miutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

/*******************************************************
 * Our target countdown
 *******************************************************/
const christmasDay = "25 Dec 2022";

function countdown() {
  const christmasDayDate = new Date(christmasDay);
  const currentDate = new Date();

  const totalSeconds = (christmasDayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  miutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

/*******************************************************
 * It returns 09,08,... 00 instead of just 9,8,7
 *******************************************************/
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

/*******************************************************
 * Calling the function
 *******************************************************/
countdown();

setInterval(countdown, 1000);

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const currentYear = new Date().getFullYear();
const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);

function timeToNewYear() {
  const currentTime = new Date();
  const diff = newYear - currentTime;
  const day = Math.floor(diff / (24 * 60 * 60 * 1000));
  const daysms = diff % (24 * 60 * 60 * 1000);
  const hour = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = diff % (60 * 60 * 1000);
  const minute = Math.floor(hoursms / (60 * 1000));
  const minutesms = diff % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);

  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = sec < 10 ? "0" + sec : sec;
}
timeToNewYear();

setInterval(timeToNewYear, 1000);

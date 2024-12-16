const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const displayTime = () => {
  let currentTime = new Date();
  let hrs = currentTime.getHours();
  let mins = currentTime.getMinutes();
  let secs = currentTime.getSeconds();

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;

  requestAnimationFrame(displayTime);
};

displayTime();

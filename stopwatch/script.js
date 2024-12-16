let displayTime = document.getElementById("display-time");
const startBtn = document.querySelector(".fa-play");

let [miniseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

const stopwatch = () => {
  miniseconds++;
  if (miniseconds == 100) {
    miniseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = miniseconds < 10 ? "0" + miniseconds : miniseconds;

  displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
};

const watchStart = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
};

const watchStop = () => {
  clearInterval(timer);
};

const watchReset = () => {
  timer == null;
  [miniseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerHTML = `00:00:00:00`;
};

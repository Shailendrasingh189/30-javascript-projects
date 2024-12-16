let countDownDate = new Date("Nov 22, 2024 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  let hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  let minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  let seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    return;
  }
}, 1000);

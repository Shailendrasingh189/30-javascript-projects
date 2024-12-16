const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const weekDays = [
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const today = new Date();

console.log(today);

date.innerText = String(today.getDate()).padStart(2, "0");
day.innerText = weekDays[today.getDay() - 1];
month.innerText = allMonths[today.getMonth()];
year.innerText = today.getFullYear();
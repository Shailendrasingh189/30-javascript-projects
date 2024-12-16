const inputBox = document.querySelector(".input-box");
const userInput = document.getElementById("date");
const btn = inputBox.querySelector("#btn");

userInput.max = new Date().toISOString().split("T")[0];
// userInput.max = new Date().toDateString();
console.log(userInput.max);


const calculateAge = () => {
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let years, months, days;

  years = y2 - y1;
  months = m2 - m1;
  days = d2 - d1;

  if(days < 0) {
    months--;
    days += new Date(y2, m2, 0).getDate();
  }

  if(months < 0) {
    years--;
    months += 12;
  }

  document.querySelector(
    "p"
  ).innerText = `You are ${years} years, ${months} months and ${days} days old`;
};

btn.addEventListener("click", calculateAge);

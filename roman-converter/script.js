const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanDigits = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

const decimalToRoman = (input) => {
  let romanNumeral = "";

  for (let i = 0; i < romanDigits.length; i++) {
    const { value, symbol } = romanDigits[i];
    while (input >= value) {
      romanNumeral += symbol;
      input -= value;
    }
  }

  return romanNumeral;
};

const checkUserInput = (inputValue) => {
  let errText = "";
  if (!userInput.value || userInput.value.match(/[e.]/g)) {
    errText = "Please enter a valid number";
  } else if (inputValue < 1) {
    errText =
      "Please enter a number greater than or equal to 1";
  } else if (inputValue > 3999) {
    errText = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }

  output.innerText = errText;
  userInput.innerText = "";
  return false;
};

const isValid = () => {
  const inputValue = parseInt(userInput.value);
    if(checkUserInput(inputValue)) {
  output.innerText = decimalToRoman(inputValue);
}

}

convertBtn.addEventListener("click", isValid);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") isValid();
});

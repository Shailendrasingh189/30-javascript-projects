const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// const countryCode = /^(1\s?)?/
// const areaCode = /(\([0-9]{3}\)|[0-9]{3})/;
// const spacesDashes = /[\s\-]?/;
// const phoneNumber = /[0-9]{3}[\s\-]?[0-9]{4}$/

// const rejectRegex = /?![A-Za-z]+/;

const checkValidNumber = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
  }
  console.log(input);
  const regex =
    /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

  const pTag = document.createElement("p");
  pTag.className = "results-content";
  regex.test(input)
    ? (pTag.style.color = "#008080")
    : (pTag.style.color = "#CD5C5C");

  pTag.appendChild(
    document.createTextNode(
      `${regex.test(input) ? "Valid" : "Invalid"} US number: ${input}`
    )
  );
  resultsDiv.prepend(pTag);
  console.log(resultsDiv);

};

checkBtn.addEventListener("click", () => {
  checkValidNumber(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkValidNumber(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

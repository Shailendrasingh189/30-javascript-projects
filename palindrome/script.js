const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");

const checkFn = (input) => {
  const originalText = input;

  if (originalText === "") {
    alert("Please input a value");
    return;
  }
  //Remove previous result
  result.replaceChildren();

  const lowerCaseStr = originalText.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const reverseStr = [...lowerCaseStr].reverse().join("");

  let resultMsg = `
  <strong>${originalText} </strong> is ${
    lowerCaseStr === reverseStr ? "" : "not"
  } a palindrome`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  result.appendChild(pTag);

  //show result.
  result.classList.remove("hidden");
};

checkBtn.addEventListener("click", () => {
  checkFn(inputText.value);
  inputText.value = "";
});

checkBtn.addEventListener("keydown", (e) => {
  if (e.key == -"Enter") {
    checkFn(inputText.value);
    inputText.value = "";
  }
});

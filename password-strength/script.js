const str = document.getElementById("strenght");
const password = document.getElementById("password");
const pasBox = document.querySelector(".password-box");
const msg = document.getElementById("msg");

password.addEventListener("input", () => {
  let strength = 0;

  const passwordValue = password.value;
  
  msg.style.display = passwordValue.length > 0 ? "block" : "none";
  pasBox.style.borderColor = passwordValue.length > 0 ? "" : "#ccc";

  if (passwordValue.length >= 8) strength++;
  if (/[A-Z]/.test(passwordValue)) strength++;
  if (/[a-z]/.test(passwordValue)) strength++;
  if (/[0-9]/.test(passwordValue)) strength++;
  if (/[\W_]/.test(passwordValue)) strength++;

  if (passwordValue.length >= 8) {
    if (strength === 5) {
      str.innerHTML = "strong";
      msg.style.color = pasBox.style.borderColor = "green";
    } else if (strength >= 3) {
      str.innerHTML = "medium";
      msg.style.color = pasBox.style.borderColor = "yellow";
    } else {
      str.innerHTML = "weak";
      msg.style.color = pasBox.style.borderColor = "#ff5925";
    }
  } else if (passwordValue.length > 0) {
    str.innerHTML = "weak";
    msg.style.color = pasBox.style.borderColor = "#ff5925";
  }
});

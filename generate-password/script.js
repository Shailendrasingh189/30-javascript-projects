const passwordShow = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const copiedText = document.getElementById("copied");

const length = 12;

const genPassword = () => {
  let password = "";
  const charNum =
    "0123456789abcdefghijklmnopqrstuvwxyz_!@#$%^&*?/}{[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i <= length; i++) {
    let randomNo = Math.floor(Math.random() * charNum.length);
    password += charNum.substring(randomNo, randomNo + 1);
  }
  passwordShow.value = password;
};

const copyPassword = async () => {
  const text = passwordShow.value;
  try {
    const success = await navigator.clipboard.writeText(text);
    copiedText.style.display = "block";
    setTimeout(() => {
      copiedText.style.display = "none";
    }, 1000);
  } catch (e) {
    console.log(e);
    copiedText.style.display = "none";
  }
};

copyBtn.addEventListener("click", copyPassword);
generateBtn.addEventListener("click", genPassword);

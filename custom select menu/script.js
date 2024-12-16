const selectField = document.getElementById("selector");
const list = document.getElementById("list");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const arrowIcon = document.getElementById("arrow-icon");

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    
  };
}

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

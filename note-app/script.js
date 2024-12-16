const notesContainer = document.querySelector(".notes-container");
const titleContent = document.getElementById("title");
const textContent = document.getElementById("description");
const createBtn = document.getElementById("create-btn");
const showtitle = document.getElementById("title-data");
const showContent = document.getElementById("content");

const delBtn = document.getElementById("del");
let closeBtn = document.querySelector(".close");
let addBtn = document.getElementById("addBtn");

const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem(
    "notes",
    notesContainer.innerHTML
  );
};
showNotes();

const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

const noteCreate = () => {
  // current date
  let dateObj = new Date();
  let month = dateObj.getMonth(),
  day = dateObj.getDate(),
  year = dateObj.getFullYear();
  console.log(month, day, year);


  let inputBox = document.createElement("div");
  inputBox.classList = "input-box";
  if(titleContent.value === "" || textContent.value === "") {
    document.querySelector(".add-form").style.display = "none";
  } else {

  inputBox.innerHTML = `
    <h2 id="title-data">${titleContent.value} </h2>
    <p id="content">${textContent.value}</p>
    <img id="del" src="images/delete.png" alt="delete-icon">`
    notesContainer.appendChild(inputBox);
  updateStorage();
  clearForm();

  document.querySelector(".add-form").style.display = "none";
  }
};

addBtn.addEventListener("click", noteCreate);

notesContainer.addEventListener("click", (e) => {
  if (e.target.id === "del") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

const clearForm = () => {
  titleContent.value = "";
  textContent.value = "";
};

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".add-form").style.display = "block";
  console.log("success");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".add-form").style.display = "none";
  clearForm();
});


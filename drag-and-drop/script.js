let lists = document.getElementsByClassName("list");
let boxes = [document.getElementById("right"), document.getElementById("left")];

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    let selected = e.target;

    boxes.forEach((box) => {
      box.addEventListener("dragover", (e) => e.preventDefault());
      box.addEventListener("drop", (e) => {
        e.preventDefault();
        if (selected) {
          box.appendChild(selected);
          selected = null;
        }
      });
    });
  });
}

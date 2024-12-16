const productImg = document.getElementById("productImg");

const btns = document.querySelectorAll(".btn");

const images = ["images/image1.png", "images/image2.png", "images/image3.png"];

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    productImg.src = images[index];

    btns.forEach(btn => btn.classList.remove("active"));

    btn.classList.add("active");
  });
});

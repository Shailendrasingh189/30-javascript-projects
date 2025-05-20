const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newBtn = document.getElementById("new-quote");

const apiToken = "gJjkcP5vbEQ7Ea5snMnLKTR6jSq6E6UcuZVjY3h8";
const api_url = "https://api.quotable.io/quotes";

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);

//   quote.innerHTML = data[0].text;
//   author.innerHTML = data[0].author;
}

getquote(api_url);

newBtn.addEventListener("click", getquote);
let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

let apikey = "CG-ktcV22J7fCDLKBSPK9yA5Sxr";

const fetchData = async () => {
  let response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin&x_cg_demo_api_key=${apikey}`
  );
  let data = await response.json();
  console.log(data[0]);
  console.log(data[1]);
  console.log(data[2]);
  btc.innerText = data[0].current_price;
  eth.innerText = data[1].current_price;
  doge.innerText = data[2].current_price;

};

fetchData();


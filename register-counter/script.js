let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.map(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
  return;
};

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid
      .map(total => total[1])
      .reduce((prev, curr) => prev + curr)
      
  );


  if (totalCID < changeDue) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * denominations[i]]);
      }
    }
  }
  if (changeDue > 0) {
    return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
      .join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

updateUI();

















// // Cash-in-drawer array organized by currency denomination, from highest to lowest
// const cid = [
//   ["ONE HUNDRED", 100],
//   ["TWENTY", 60],
//   ["TEN", 20],
//   ["FIVE", 55],
//   ["ONE", 90],
//   ["QUARTER", 4.25],
//   ["DIME", 3.1],
//   ["NICKEL", 2.05],
//   ["PENNY", 1.01],
// ];

// // const cid = [
// //   ["ONE HUNDRED", 0.0],
// //   ["TWENTY", 0.0],
// //   ["TEN", 0.0],
// //   ["FIVE", 0.0],
// //   ["ONE", 0.0],
// //   ["QUARTER", 0.0],
// //   ["DIME", 0.0],
// //   ["NICKEL", 0.0],
// //   ["PENNY", 0.5],
// // ];

// const price = 19.5;

// const purchaseBtn = document.getElementById("purchase-btn");
// const changeDueDisplay = document.getElementById("change-due");
// const cash = document.getElementById("cash");
// const cashDrawerDisplay = document.getElementById("cash-drawer");
// const totalPrice = document.getElementById("total-price");

// // Function to display the change due in the UI
// const displayChangeUI = (status, change) => {
//   console.log(status, change);
//   changeDueDisplay.innerHTML = `<p>Status: ${status}`;
//   changeDueDisplay.innerHTML += change
//     .map(([currency, amount]) => `<p>${currency}: $${amount}</p>`)
//     .join(" ");
// };

// // Function to update and display the cash drawer in the UI
// const drawerUI = () => {
//   totalPrice.innerText = price;
//   cash.value = "";
//   cashDrawerDisplay.innerHTML = cid
//     .map(([unit, amount]) => `<li>${unit.toLowerCase()}: $${amount}</li>`)
//     .reverse()
//     .join(" ");
// };

// // Array containing the values of each currency denomination
// const currValues = [100.0, 20.0, 10.0, 5.0, 1.0, 0.25, 0.1, 0.05, 0.01];

// // Function to check the cash register and calculate the change
// const checkCashRegister = () => {
//   const cashGiven = Number(cash.value);
//   const result = {
//     status: "OPEN",
//     change: [],
//   };

//   let changeDue = cashGiven - price;
//   let totalCid = cid
//     .reduce((total, [_, amount]) => total + amount, 0);

//   if (cashGiven < price) {
//     alert("Customer does not have enough money to purchase the item");
//     cash.value = "";
//     return;
//   }

//   if (cashGiven === price) {
//     changeDueDisplay.innerHTML = `<p>No change due - customer paid with exact cash</p>`;
//     cash.value = "";
//     result.status = "CLOSED";
//     return;
//   }

//   if (totalCid < changeDue) {
//     changeDueDisplay.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
//     cash.value = "";
//     return;
//   }

//   if (totalCid === changeDue) {
//     result.status = "CLOSED";
//   }

//   for (let i = 0; i < cid.length; i++) {
//     let [currency, amountInDrawer] = cid[i];

//     if (changeDue >= currValues[i] && amountInDrawer > 0) {
//       let amountToReturn = 0;

//       while (changeDue >= currValues[i] && amountInDrawer >= currValues[i]) {
//         changeDue -= currValues[i];
//         amountInDrawer -= currValues[i];
//         amountToReturn += currValues[i];

//         changeDue = changeDue.toFixed(2);
//         amountInDrawer = amountInDrawer.toFixed(2);
//         amountToReturn = Number(amountToReturn.toFixed(2));
//       }

//       if (amountToReturn > 0) {
//         result.change.push([currency, amountToReturn]);
//         cid[i][1] = parseFloat(amountInDrawer);
//       }
//     }
//   }

//   if (changeDue > 0) {
//     changeDueDisplay.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
//     cash.value = "";

//     return;
//   }
//   result.change.sort(
//     (a, b) =>
//       currValues[cid.findIndex(([cur]) => cur === b[0])] -
//       currValues[cid.findIndex(([cur]) => cur === a[0])]
//   );

//   if (totalCid == cashGiven - price) {
//     result.status = "CLOSED";
//   }
//   displayChangeUI(result.status, result.change);
//   drawerUI();
// };

// const resultDisplay = () => {
//   if (!cash.value || isNaN(cash.value)) {
//     alert("Please enter a valid cash amount.");
//     cash.value = "";
//     return;
//   }
//   checkCashRegister();
// };

// // Event listener for the purchase button
// purchaseBtn.addEventListener("click", resultDisplay);

// cash.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     resultDisplay();
//   }
// });

// // Initialize the cash drawer display
// drawerUI();

// let n = 4;
// let pattern = "";
// // top
// for (let i = 0; i < n; i++) {

//   for (let j = 0; j <= i; j++) {
//     pattern += "*";
//   }

//   for (let j = 2 * (n - i) - 3; j >= 0; j--) {
//     pattern += " ";
//   }

//   for (let j = 0; j <= i; j++) {
//     pattern += "*";
//   }

// pattern += "\n";
// }

// for (let i = 0; i < n; i++) {

//   for (let j = n; j > i; j--) {
//     pattern += "*";
//   }

//   for (let j = 1; j <= 2 * i; j++) {
//     pattern += " ";
//   }
//   for (let j = n; j > i; j--) {
//     pattern += "*";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// const sumOfDigits = (num) => {
//   let digitSum = 0;
//   for (let i = num; i > 0; i--) {
//     let lastDig = num % 10;
//     num = Math.floor(num/ 10);
//     digitSum += lastDig;
//   }
//   return digitSum;
// };

// console.log(sumOfDigits(4747));

// const factorialN = (n) => {
//   let fact = 1;

//   for (let i = n; i > 0; i--) {
//     fact *= i;
//   }
//   return fact;
// };

// // console.log(factorialN(6));

// const binoCoeff = (n,r) => {
//   let result = factorialN(n) / (factorialN(r) * factorialN(n-r));
//   return result;
// };

// console.log(binoCoeff(7,3));

// function printPrimes(n) {
//   if (n < 2) {
//     console.log("No prime numbers less than 2.");
//     return;
//   }

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i * i <= num; i++) {
//     if(num % i === 0 ) return false;
//   }
//   return true
// };

// const printPrime = (num) => {
//   return isPrime(num) === true ? `${num} is Prime No.` : `${num} is not Prime No.`
// }

// console.log(printPrime(7));

// const checkPrime = (num) => {
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const primePrimeNo = (num) => {
//   if (num < 2) return `No prime no.`;
//   let result = '';
//   for (let i = 2; i <= num; i++) {
//     if(checkPrime(i)) {
//       result += i + ", ";
//     }
//   }
//   return result;
// };

// console.log(primePrimeNo(20));

// const fibonacciS = (num) => {
//   if(num <= 0) return `please enter positive value`;

//   let a =0, b=1, nextTerm;
//   let  result = '';

//   for(let i = 0; i<=num; i++) {
//     result += a + ' ';
//     nextTerm = a + b;
//     a = b;
//     b= nextTerm;
//   }

//   console.log(result);
// }

// fibonacciS(6)

// const decToBin = (decN) => {
//   let ans = 0;
//   let power = 1;
//   while (decN) {
//     rem = decN % 2;
//     decN = Math.floor(decN / 2);
//     ans += rem * power;
//     power *= 10;
//   }
//   return ans;
// };

// console.log(decToBin(5));

// const binToDec = (binN) => {
//   let ans = 0;
//   let power = 1;
//   while (binN > 0) {
//     let rem = binN % 10;
//     console.log(binN, rem, power, ans);
//     ans += rem * power;
//     binN = Math.floor(binN / 10);
//     power *= 2;
//   }
//   console.log(ans);
// };
// binToDec(10101);

// const bitwiseFunc = () => {
//   // let a = 10
//   //   b = 1;
//   return 4-5*2;
// };
// console.log(bitwiseFunc());

// Figure out how to find if a number is power of 2 without any loop.

// Write a function to reverse an Integer n.

const values = [5, 15, 22, -15, 24];

const swapSmallLarge = (arr) => {
  let smallest = arr[0];
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = i;
    }
    if (arr[i] < smallest) {
      smallest = i;
    }
  }
  // const minValue = Math.min(...arr);
  // const maxValue = Math.max(...arr);
  // console.log()
  let temp = arr[smallest];
  arr[smallest] = arr[largest];
  arr[largest] = temp; 
  console.log(arr[smallest], arr[largest], arr);
};

console.log(swapSmallLarge(values));


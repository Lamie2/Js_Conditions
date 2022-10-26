//#region
// 1. TaSK

// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");
// console.log(a / b);
// console.log(a % b);
//#endregion

//#region
// 2. TaSK

// let a = prompt("Enter the value of a");
// let b = prompt("Enter the value of B");
// var c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);
//#endregion

//#region
// 3. TaSK
// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");
// const c = +prompt("Enter the value of C");
// if (a !== 0 && b !== 0 && c !== 0) {
//   console.log((c - b) / a);
// } else {
//   console.log("one of the number is zero");
// }

//#endregion

//#region
// 4. TaSK
// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");
// if (a > b) {
//   console.log(a + b);
// } else if (a == b) {
//   console.log(a * b);
// } else {
//   console.log(a - b);
// }

//#endregion

//#region
// 5. TaSK
// const a = +prompt("Enter the value of a");
// const b = +prompt("Enter the value of B");
// const c = +prompt("Enter the value of C");
// let x1, x2;
// let d = b * b - 4 * a * c;
// if (d > 0) {
//   x1 = (-b + d ** (1 / 2)) / (2 * a);
//   x2 = (-b - d ** (1 / 2)) / (2 * a);
//   console.log(`${x1} , ${x2}`);
// } else if (d == 0) {
//   x1 = -b / (2 * a);
//   x2 = -b / (2 * a);
//   console.log(`${x1} , ${x2}`);
// }else {
//   console.log(`the equation has no real roots`);
// }

//#endregion

//#region
// 6. TaSK
// const a = +prompt("Enter two digit number")

// if (a / 10 >= 1) {
//   let x = ""
//   let y = ""
//   let check = false

//   switch (parseInt((a / 10) % 10)) {
//     case 1:
//       if (a % 10 === 0) {
//         x += "ten"
//       } else if (a % 10 === 1) {
//         x += "eleven"
//       } else if (a % 10 === 2) {
//         x += "twelve"
//       } else if (a % 10 === 3) {
//         x += "thirteen"
//       } else if (a % 10 === 4) {
//         x += "fourteen"
//       } else if (a % 10 === 5) {
//         x += "fifteen"
//       } else if (a % 10 === 6) {
//         x += "sixteen"
//       } else if (a % 10 === 7) {
//         x += "seventeen"
//       } else if (a % 10 === 8) {
//         x += "eighteen"
//       } else if (a % 10 === 9) {
//         x += "nineteen"
//       }
//       check = true
//       break
//     case 2:
//       x += "twenty"
//       break
//     case 3:
//       x += "thirty"
//       break
//     case 4:
//       x += "fourty"
//       break
//     case 5:
//       x += "fifty"
//       break
//     case 6:
//       x += "sixty"
//       break
//     case 7:
//       x += "seventy"
//       break
//     case 8:
//       x += "eighty"
//       break
//     case 9:
//       x += "ninety"
//       break
//     default:
//       break
//   }
//   if (!check) {
//     switch (a % 10) {
//       case 1:
//         y += "one"
//         break
//       case 2:
//         y += "two"
//         break
//       case 3:
//         y += "three"
//         break
//       case 4:
//         y += "four"
//         break
//       case 5:
//         y += "five"
//         break
//       case 6:
//         y += "six"
//         break
//       case 7:
//         y += "seven"
//         break
//       case 8:
//         y += "eight"
//         break
//       case 9:
//         y += "nine"
//         break
//       default:
//         break
//     }
//   }
//   console.log(x + " " + y)
// }
// #endregion

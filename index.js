'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number'
// document.querySelector('.number').textContent = '13'
// document.querySelector('.score').textContent = '10'

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No nnumber';
        //player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'correct number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem"
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

    } else if (guess !== secretNumber) {
        if (score > 1) {

            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "you lost the game"
            document.querySelector('.score').textContent = 0;
        }

    }
    // when high
    //     else if (guess > secretNumber) {
    //         if (score > 1) {

    //             document.querySelector('.message').textContent = 'Too high';
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = "you lost the game"
    //             document.querySelector('.score').textContent = 0;
    //         }
    //         // when low
    //     } else if (guess < secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = 'Too low'
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = "you lost the game"
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }

}
)
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guesing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem"

})



































//

//   const arr = [1, 2, 3, -1, -5, 9, 10, 9, 11, 7];
//   const max = Math.max(...arr);
//   alert(max);
//   const firstName = "naeem";
//   const job = "developer ";
//   const birthyear = 1998;
//   const year = 2023;
//   //   const naeem =
//   //     "i am " + firstName + " a " + (year - birthyear) + " years old " + job;
//   //   alert(naeem);
//   const naeemNew = `i am  ${firstName}  a ${
//     year - birthyear
//   } years old ${job}`;
//   alert(naeemNew);
//   const age = 10;
//   const isOldEnogh = age >= 18;
//   if (isOldEnogh) {
//     console.log("naeem can start driving license ");
//   } else {
//     const yearsLeft = 18 - age;
//     console.log(`naeem is too young please wait ${yearsLeft} years `);
//   }

// ! shallo copy and deep coppy concpet
//   const obj1 = {
//     a: 1,
//     b: 2,
//   };

//   const obj2 = obj1;

//   obj2.a = 2222;

//   console.log(obj1.a);

//   const birthyear = 2026;
//   if (birthyear <= 2000) {
//     century = 20;
//   } else {
//     century = 21;
//   }
//   console.log(century);
// challenge #1
//   const markWeight = 78;
//   const markHeight = 1.69;
//   const johnWeight = 92;
//   const johnHeight = 1.95;
//   const markBmi = markWeight / markHeight ** 2;
//   const johnBmi = johnWeight / (johnHeight * johnHeight);
//   if (markBmi > johnBmi) {
//     console.log(
//       `mark's BMI (${markBmi}) is higher than john's BMI (${johnBmi})!`
//     );
//   } else {
//     console.log(
//       `john's BMI (${johnBmi}) is higher than mark's BMI (${markBmi})!`
//     );
//   }
//   const markHigherBmi = markBmi > johnBmi;
//   console.log(markBmi, johnBmi);
//   console.log(markHigherBmi);
//   type conversion
//   const inputyear = "1991";
//   console.log(Number(inputyear));
//   console.log(Number(inputyear) + 18);
//   console.log(typeof Number(inputyear));
//   type coercion
//   console.log("i am " + 23 + " years old");
//   console.log("i am " + "23" + " years old");
//   console.log("23" + "10" + 3);
//   let n = "1" + 1;
//   n = n - 1;
//   console.log(n);
//   truthy and 5 falsy values: 0,'',undefined,null,nan
// console.log(Boolean(0)); false
// console.log(Boolean(undefined)); false
// console.log(Boolean("naeem")); true
// console.log(Boolean({})); true
// console.log(Boolean("")); false

//   const money = 0;
//   if (money) {
//     console.log("don't spend it all");
//   } else {
//     console.log("you should get a job");
//   }

//   let height = 0;
//   if (height) {
//     console.log("height is defined");
//   } else {
//     console.log("height is undefined");
//   }
// euality operators

// const age = "18";
// if (age === 18) console.log("you just became an adult strict");
// if (age == 18) console.log("you just became an adult loose");
// const number = Number(prompt("what is your number"));
// console.log(number);
// console.log(typeof number);
// if (number === 32) {
//   console.log("32 is good number");
// } else if (number === 7) {
//   console.log("7 is also cool number");
// } else if (number === 9) {
//   console.log("9 is also cool number");
// } else {
//   console.log("number is not 32 or 7 or 9");
// }
// if (number !== 32) console.log("why not 32");
// logical operators
// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);
// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (hasDriverLicense && hasGoodVision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("some else should drive");
// }
// const isTired = false;
// console.log(hasDriverLicense || hasGoodVision || isTired);
// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("some else should drive");
// }
// coding challange# 03
// const dolphinsScoreMatch1 = 96;
// const dolphinsScoreMatch2 = 108;
// const dolphinsScoreMatch3 = 89;
// const koalasScoreMatch1 = 88;
// const koalasScoreMatch2 = 109;
// const koalasScoreMatch3 = 110;
// const avgScorDolphin =
//   dolphinsScoreMatch1 + dolphinsScoreMatch2 + dolphinsScoreMatch3 / 3;
// const avgScoreKoalas =
//   koalasScoreMatch1 + koalasScoreMatch2 + koalasScoreMatch3 / 3;
// if (avgScoreKoalas > avgScorDolphin) {
//   console.log(
//     `koalas win the match because avgscore of dolphin is ${avgScorDolphin} and koalas has ${avgScoreKoalas} scores`
//   );
// } else if (avgScorDolphin > avgScoreKoalas) {
//   console.log(
//     `dolphin win the match because avgscore of dolphin is ${avgScorDolphin} and koalas has ${avgScoreKoalas} scores`
//   );
// } else {
//   console.log(
//     ` match draw same score because avgscore of dolphin is ${avgScorDolphin} and koalas has ${avgScoreKoalas} scores`
//   );
// }
// switchstatement
// const day = prompt("enter day");
// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuseday":
//     console.log("prepare videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("recode videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the holidays");
//     break;
//   default:
//     console.log("not a valid day");
// }
// statements and  expressions
// conditional ternary operator
// const age = 24;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);
// coding challange # 4

// const bill = 40;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `the bill was ${bill} the tip was ${tip} and the total value is ${
//     tip + bill
//   }`
// );
// fundamental part 2
// strict mode
// "use strict";
// let hasLicense = false;
// const testPass = true;
// if (testPass) hasLicense = true;
// if (hasLicense) console.log("i can drive");
// function--------------------------------------------------------------------
// function logger() {
// console.log("my name is naeem");
// }
// logger();
// function logger(a, b) {
//   console.log(`a + b = ${a + b}`);
//   mul = a * b;

//   return mul;
// }
// mul = logger(5, 5);
// console.log(mul);
// const calcAge2 = function (birthyear) {
//   return 2023 - birthyear;
// };
// const age2 = calcAge2(1998);
// console.log(age2);
// arrow function--------------
// const calcAge3 = (birthyear) => 2023 - birthyear;
// console.log(calcAge3(1998));
// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearUntilRetirement(1998, "naeem"));
//  arrays in javascript
// const friends = ["taha", "naeem", "faheem"];
// console.log(friends);

// challange # 4 -----------------------------------------
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + b ills[i]);
// }
// console.log(bills, tips, totals);
// const clacAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(clacAverage([2, 3, 7]));
// console.log(clacAverage(totals));
// console.log(clacAverage(tips));
// const arr = [20, 30, -6, -10, -12, 50, 60];
// // const arrnew = arr.filter((n) => n < 0);
// // console.log(arrnew);
// // const arrnew = arr.map((n) => n < 2);
// // console.log(arrnew);
// const arrnew = arr.find((n) => n < 2);
// console.log(arrnew);

//For Loop

// for (let i = 1; i <= 5; i++) {
//   console.log("Apna Collage");
// }

//While Loop

// let i = 1;

// while (i <= 10) {
//   console.log("Apna College.");
//   i++;
// }

//Do While Loop

// let i = 1;

// do {
//   console.log("Apna College.");
//   i++;
// } while (i <= 10);

// let i = 1;

// do {
//   console.log("i =", i);
//   i++;
// } while (i <= 5);

//For of Loop

// let string = "RahulPatil"

// for(let i of string){
//     console.log("i = ", i);
// }

// let a = undefined;

// console.log(typeof a);

// let count = 0;
// while (count < 3) {
//   console.log(count);
//   count++;
// }

// let a = 1
// let b = a++

// console.log(a, b);

// let sum = 0

// for( let i =0; i<=5; i++){
//     sum = sum + i
// }

// console.log(sum);

// let count = 0;
// while (count < 3) {
//   count++;
//   if (count === 2) {
//     continue;
//   }
//   console.log(count);
// }

// let a = 5;
// if (a == 5) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// let str = ""

// console.log(str.length);

// let a =10;

// for(let i = 1; i<=10; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// for(let i =1; i<=100; i++){

//     if(i %2 ===0){
//         console.log("Even Number:", i);
//     }
// }

// let SecreteValue = 25;

// const promptValue = prompt("Guess the Number");

// while(SecreteValue !== promptValue){
//     promptValue = prompt("You Entered wrong Number, Guess again:")
// }

// console.log("Correct");

// let str= "Apna college"

// console.log(str.replace("n", "r"));

// let firstName = "rahul"
// let lastName = "Patil"

// const FullName = firstName.concat(lastName)

// const TotalIndex = FullName.length;

// const UserName = FullName.concat(TotalIndex)

// console.log(`@${UserName}`);

// let String = "Rahul"

// console.log(String.length);

// let str = "Coder"

// console.log(str[0], str[4]);

// let msg = "Say Hello to JavaScript";

// console.log(msg.includes("Hello"));

// let fruits = ['mango', 'apple', 'banana', 'lemon', 'grapes']

// console.log(fruits);

// let nums = [11, 22, 33, 44, 55]

// console.log(nums[2]);

// let arr = ["A", "B", "C"];
// console.log(arr[3]);

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(`This is odd Number: ${i}`);
//   }
// }

// let num = 5

// while(num > 0){
//     console.log("looping", num);
//     num--;
// }

// let firstName = "Rahul"
// let lastName = "Patil"

// console.log(`Hello, ${firstName} ${lastName}`);

// let string ="developer"

// let firstLetter = string[0].toUpperCase()

// let fullWord = firstLetter + string.slice(1)

// console.log(fullWord.includes("Dev"));

// let marks =[91, 82, 77, 65]

// console.log(marks[1]);

// let fruits =['apple', 'banana']

// console.log(fruits.length);

// fruits[5] ='grapes'

// console.log(fruits);

// console.log(fruits.length);

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//       console.log(`Even Numbers`, i);
//     }
//   }

// for (let i = 1; i <= 10; i++) {
//   console.log(5 * i);
// }

// let str = "Hello";

// let count = 0;

// for (let char of str) {
//   if (
//     char === "i" ||
//     char === "e" ||
//     char === "o" ||
//     char === "u" ||
//     char === "a"
//   ) {
//     count++;
//   }
// }

// console.log("TOtal count", count);

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(`Prime Numbers`, i);
//     }
//   }

// function findFactorial(num){
//  return num * num;
// }

// let result =findFactorial(3)

// console.log(result);

// function reverseSting(str) {
//   return str.split("").reverse().join("");
// }

// let result = reverseSting("Hello");

// console.log(result);

// checkPalindrome = (str) => {
//   let reverseString = str.split("").reverse().join("");

//   if (reverseString === str) {
//     console.log(`${str} is the palindrome Word `);
//   } else {
//     console.log("Not a palindrome word.");
//   }
// };

// checkPalindrome('nan');

// checkWords = (str)=>{

//    let data = str.split(/\s+/)

//    let result = data.map(words=>

//     words.length> 0
//    ).length

//    console.log(result);

// }

// checkWords('Hello i am number.')

// function upperCase(str) {
//   let words = str.trim().split(/\s+/);


//   let result = words.filter((word) => word.length > 0);

 
//     let output = result.map(word=>{
//          return word[0].toUpperCase() + word.slice(1).toLowerCase()
//     });

//     console.log(output);
    
 
// }

// upperCase("hello world");


// function removeDuplicates(str) {
//     const seen = {};
//     let result = '';
    
//     for (let char of str) {
//         if (!seen[char]) {
//             seen[char] = true;
//             result += char;
//         }
//     }
    
//     return result;
// }

// console.log(removeDuplicates('Hello'));

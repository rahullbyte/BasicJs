// function myFunction(){
//     console.log("Helo");
// }

// myFunction()

// function myFunction(msg) {
//     //parameter -> input
//   console.log(msg);
// }

// myFunction("I :ov JS");  //Argument

// function sum(num, num2){

//     console.log(num + num2);
// }

// sum(12, 34)

// const arrowfun = (a, b) =>{
//     console.log(a * b);

// }

// arrowfun(2, 4)

// function vowels(str) {
//   let count = 0;

//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(count);
// }

// vowels('Hello')

// function isLeapYear(year) {
//     if (year % 400 === 0) {
//         return true;
//     }
//     if (year % 100 === 0) {
//         return false;
//     }
//     if (year % 4 === 0) {
//         return true;
//     }
//     return false;
// }

// function checkGreater(number1, number2) {
//   let greater = 0;

//   if (number1 > number2) {
//     greater = number1;
//   } else {
//     greater = number2;
//   }

//   return greater;
// }

// console.log(checkGreater(20, 200));

// function createFibonacci(userNumber) {
//   let arr = [];

//   for (let i = 1; i <= userNumber; i++) {
//     arr.push(i);
//   }

//   arr.forEach((number) => {
//     let output = number * number;

//     console.log(output);
//   });
// }

// createFibonacci(16)

// function checkDigit(number) {
//   let count = String(number).length

//   console.log(count);
// }

// checkDigit(10000000000000);

// function getAverage() {
//   let arr = [55, 56, 60, 75, 80, 64, 62, 57];

//   let sum = 0;

//   for (let number of arr) {
//     sum += number;
//   }

//   let result = sum / arr.length;

//   console.log(result);
// }

// getAverage();

// function getAverageByReduce() {
//   let arr = [55, 56, 60, 75, 80, 64, 62, 57];

//   let output = arr.reduce((result, curr) => {
//     return result + curr;
//   });

//   let average = output / arr.length;

//   console.log(average);
// }

// getAverageByReduce();

// function reverseString(str){

//   let reverseWord = '';

//   for(let char of str){

//    reverseWord = char + reverseWord

//   }

//   console.log(reverseWord);

//   return reverseWord;
// }

// reverseString('hello')

// function countVowels(str) {
//   let count = 0;

//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(`Total vowels in this Word is ${count}`);
// }

// countVowels('rahul')

// function longestWord(str) {
//   const data = str.trim().split(/\s+/);

//   let longest = "";

//   for (let char of data) {
//     if (char.length > longest.length) {
//       longest = char;
//     }
//   }
//   return longest;
// }

// console.log(longestWord("Hello Rahul Patil workingqpefn here."));

// function isPalindrome(str) {
//   const reverseWord = str.split("").reverse().join("");

//   if (str === reverseWord) {
//     console.log(`${str} is palindrome Word.`);
//   } else {
//     console.log(" Not a palindrome.");
//   }
// }

// isPalindrome("rahul");

// function flattenArray(arr){

//   let array =[];

//   for(let ar of arr){

//     array.push(...ar)
//   }

//   return array;
// }

// let result =flattenArray([[1,2], [3,4], [5]])

// console.log(result);

// function removeDuplicates(arr){

//   let seen = {}

//   let result =[];

//   for(let word of arr){

//     if(!seen[word]){

//       seen[word]= true;
//       result.push(word)
//     }

//   }
//   return result;
// }

// console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6]));

// function getFrequency(arr) {
//   console.log(arr);
// }

// getFrequency([1, 2, 2, 3, 4, 5, 6, 7, 7]);

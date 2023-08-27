// 1. TWO SUM
// var twoSum = function(nums, target) {
//     let arr = [];
    
//     for (let num of nums) {
//       let index = nums.indexOf(num)
//       let iterations = (nums.length - 1) - index;

//       while(iterations > 0){
//         if(num + nums[nums.length - iterations] === target) {
//           return [index, nums.length - iterations];
//         }
//           iterations -= 1;
//       } 
//     }
// };

//=====================================================================================================================================================================================

//INCOMPLETE!
// 2. ADD TWO NUMBERS
// var addTwoNumbers = function(l1, l2) {
//     //Reverse the order of both lists, join them as a string, and convert them into a number.
//     num1 = Number(l1.reverse().join(''));
//     num2 = Number(l2.reverse().join(''));
    
//     return Array.from(String(num1 + num2)).reverse(); //Calculate the sum of both nums, convert to a string, and convert to an array. Return the array in reverse.
// };

// addTwoNumbers([2,4,3],[5,6,4]);

//=====================================================================================================================================================================================

// 9. PALINDROME NUMBER
// a. WITH STRING CONVERSION
// var isPalindrome = function(x) {
//     str = x.toString();
//     mid = str.length % 2 === 0 ? str.length / 2 : (str.length - 1) / 2;

//     for (let i = 0; i < mid; i++) {
//         console.log(str[i] + " " + str[str.length - 1 - i]);
//         if (str[i] !== str[(str.length - 1) - i]) {
//             return false;
//         }
//     }

//     return true;
// };

//=====================================================================================================================================================================================

// 12. ROMAN TO INTEGER

// var romanToInt = function(s) {
//     let decVal = 0;

//     const romNum = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };


//     return decVal;
// };

// console.log(romanToInt("MCXLIV"));

//=====================================================================================================================================================================================

// 14. LONGEST COMMON PREFIX

var longestCommonPrefix = function(strs) {
    let prefix = "";

    for (let word in strs) {
        prefix = word[1];
        console.log(word[1]);
    }
};
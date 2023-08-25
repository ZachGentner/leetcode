//MULTIPLES OF 3 OR 5
// function solution(number){
//     let result = 0; //Create a placeholder variable to store the sum of multiples
  
//     //Iterate through all numbers from 1 through number exclusive.
//     for (let i = 1; i < number; i++) {
//         //If the current value i is divisible by 3 or 5, add it to the result.
//         if(i % 3 === 0 || i % 5 === 0){
//             result += i;
//         }
//     }
    
//     return result; //Return the sum of all n that are multiples of 3 or 5.
//   }

//VOWEL COUNT
// function getCount(str) {
//     let arr = str.toLowerCase() //First, we convert the string to lowercase.
//                  .match(/[aeiou]/g); //Next, we match all instances of "aeiou" throughout the string using the g flag.

//     return arr != null ? arr.length : 0; //Finally, we return the length of the array of characters if arr is not null.
//   }
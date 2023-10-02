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

// =====================================================================================================================================================================================

//VOWEL COUNT (Regex and String Methods)
// function getCount(str) {
//     let arr = str.toLowerCase() //First, we convert the string to lowercase.
//                  .match(/[aeiou]/g); //Next, we match all instances of "aeiou" throughout the string using the g flag.

//     return arr != null ? arr.length : 0; //Finally, we return the length of the array of characters if arr is not null.
//   }
    
    
// =====================================================================================================================================================================================

//EVEN OR ODD (Ternary Solution)
// function evenOrOdd(number) {
    //   return number % 2 === 0 ? "Even" : "Odd"; //Here, we use the conditional (ternary) operator to return either Even or Odd if n % 2 equals 0.
    // }
    
// EVEN OR ODD (If-Else Solution)
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// =====================================================================================================================================================================================

//COUNTING SHEEP...

//USING A FOR LOOP
// function countSheeps(arrayOfSheep) {
//     let count = 0;
    
//     for (let sheep in arrayOfSheep) { //Iterate through the entire array.
//       if (arrayOfSheep[sheep] === true) { //If the index 'sheep' in 'arrayOfSheep' is equal to true, increment the counter by one.
//         count++;
//       }
//     }

//     return count;
//   }

//USING THE FILTER ARRAY METHOD
// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
//   }

// =====================================================================================================================================================================================

//OPPOSITE NUMBER

// function opposite(number) {
//     return number != 0 ? number * -1 : 0; //Avoids -0 case, though it's not necessary to pass test cases.
//   }

// =====================================================================================================================================================================================

//CONVERT A STRING INTO AN ARRAY

// function stringToArray(string){
// 	return string.split(" ");
// }

// =====================================================================================================================================================================================

//ABBREVIATE A TWO WORD NAME

// function abbrevName(name){
//     return name.toUpperCase() //Capitalize the string.
//                .split(" ") //Create an array of both first and last name.
//                .map((x) => x[0]) //Createa new array of only the first and last inital.
//                .join("."); //Join the two array elements into a string with a '.'
// }

// =====================================================================================================================================================================================

//SQUARE(n)SUM

// function squareSum(numbers){
//     let sum = 0;
     
//      for (let number in numbers) {
//        sum += Math.pow(numbers[number], 2);
//      }
     
//      return sum;
//    }

// =====================================================================================================================================================================================


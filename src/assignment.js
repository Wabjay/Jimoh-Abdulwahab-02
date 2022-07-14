// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 /* Challenge - 1 */
function sumOfNumbers(arrayOfNumbers) {

    return arrayOfNumbers.length;
}
// assignment.sumOfNumbers = sumOfNumbers;

/* Challenge - 2 */
function countEvenNumbers(arrayOfNumbers) {

  let evenNumberCount = 0;
  
  for(let i = 0; i < arrayOfNumbers.length; i++){
    
    let evenNumber = arrayOfNumbers[i] % 2 === 0;
    
    if (evenNumber) {
      evenNumberCount++;
    }
  }
    return evenNumberCount;

  // let evenNumbersArray = [];

  // for(let i = 0; i < arrayOfNumbers.length; i++){
  //   let evenNumber = arrayOfNumbers[i] % 2 === 0;
  //   if (evenNumber) {
  //     evenNumbersArray.push(evenNumber);
  //   }
  // }
  // return evenNumbersArray.length;
}
assignment.countEvenNumbers = countEvenNumbers;

/* Challenge - 3 */

function celsiusToFahrenheit(arrayOfNumbers) {
  let fahrenheitArray = [];
  
  for(let i = 0; i < arrayOfNumbers.length; i++){
    
    let fahrenheit = Math.floor(arrayOfNumbers[i] * (9/5) + 32);

    fahrenheitArray.push(fahrenheit)
  }
    return fahrenheitArray;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;

// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================


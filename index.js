/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) { 
        return "FizzBuzz"
    }if (num % 3 === 0) { 
        return "Fizz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else if (num % 3 !== 0 || num % 5 !== 0) {
        return "Pop"
    } 
}

console.log(fizzBuzz(49)); //Pop
console.log(fizzBuzz(55)); //Buzz
console.log(fizzBuzz(120)); //FizzBuzz
console.log(fizzBuzz(9999)); //Fizz




// /* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
// //let result = averager(prices);
// //console.log(result);

function averager(arrayIn) {
    let sum = 0;
    let avgResult = 0;
    for (indexer in arrayIn) {
        sum += arrayIn[indexer];
    }
    avgResult = sum/arrayIn.length;
    return avgResult;
}

let result = averager(prices);
console.log(`Average of prices array = ${result}`);



// Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 
// celToFah(37.5);
// celToFah(-40);
// celToFah(0);
// celToFah(100);
// celToKel(173.13);
// celToKel(-13);
// */

function celToFah(celsius){
    let result = (celsius * 9/5) + 32;
    return result;
}

function celToKel(celsius){
    let result = celsius + 273.15;
    return result;
}

console.log(`37.5 Celsius = ${celToFah(37.5)} Fahrenheit`);
console.log(`-40 Celsius = ${celToFah(-40)} Fahrenheit`);
console.log(`0 Celsius = ${celToFah(0)} Fahrenheit`);
console.log(`100 Celsius = ${celToFah(100)} Fahrenheit`);
console.log(`173.13 Celsius = ${celToKel(173.13)} Kelvin`);
console.log(`-13 Celsius = ${celToKel(-13)} Kelvin`);


/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

function pow(x, y) {
    return powNum = x ** y
}

console.log(pow(2, 3))

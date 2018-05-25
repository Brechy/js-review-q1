/**
 * @name: add
 * @description returns the result of both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 * */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * @name: subtract
 * @description returns the difference between both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 * */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * @name: calculateSum
 * @description returns a sum of an array
 * @param1: array
 * @return: number
 * */
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

/**
 * @name: mapFunc
 * @description returns altered array
 * @param1: array
 * @return: array
 * */
function map(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
    return newArr;
  }

  return newArr;
}
// map([1,2,3],3)  => [3,6,9]
// map([2,3,4],-2) => [-4,-6,-8]

function filter() {}

function reverseLettersInPlace() {}
// reverseLettersInPlace("Hi justin") => "iH nitsuj"
// reverseLettersInPlace(" A simple challenge! ") => => " A elpmis !egnellahc "

function allSimpleCombinations() {}
// allSimpleCombinations('cat')  => ['c','ca','cat','a','at','t']
// allSimpleCombinations('talk') => ['t','ta','tal','talk','a','al','alk','l','lk','k'];

function alphabeticalOrder() {}
// alphabeticalOrder('talk') => 'aklt'
// alphabeticalOrder('sailormoon')  => 'ailmnooors'

function returnLongestWord() {}
// returnLongestWord('short sentence alphabetical') => 'alphabetical'
// returnLongestWord('cute pretty beautiful pulchritudinous') => 'pulchritudinous'

function isPrime() {}
// isPrime(7)  => true
// isPrime(12) => false

function returnCoinBreakdown() {}
// returnCoinBreakdown(46) => {25:1,10:1,5:2,1:1}
// returnCoinBreakdown(19) => {25:0,10:1,5:1,1:4}

function countVowels() {}
// countVowels('apple')  => 2
// countVowels('tomato') => 3

// BONUS //
function forEach() {}

module.exports = {
  add,
  subtract,
  calculateSum,
  map,
};

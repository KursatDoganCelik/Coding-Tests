// This file contains the answers to the problems and the answers to the 
// questions proceed according to the difficulty filter on the ProjectEuler site.
let answer

// Q1 - Find the sum of all the multiples of 3 or 5 below 1000.
let sum = 0
for(let i = 0; i < 1000; i++){
  if(i % 3 == 0 || i % 5 == 0)
    sum += i
}
answer = sum  //233168

// Q2 - By considering the terms in the Fibonacci sequence whose values
// do not exceed four million, find the sum of the even-valued terms.
let valueOne = 1, valueTwo = 1; sum = 0
while(valueOne < 4000000 && valueTwo < 4000000){
  valueOne += valueTwo
  if (valueOne % 2 == 0)
    sum += valueOne

  valueTwo += valueOne
  if (valueTwo % 2 == 0)
    sum += valueTwo
}
answer = sum  //4613732

// Q3 - Find the difference between the sum of the squares of the first 
// one hundred natural numbers and the square of the sum.
let squareOfSum = 0, sumOfSquare = 0, temp = 0
for(let i = 0; i <= 100; i++){
  temp += i
}
squareOfSum = temp*temp    // (1 + 2 + ... + 100)^2

for(let i = 0; i <= 100; i++){
  sumOfSquare += i*i       // 1^2 + 2^2 + ... + 100^2
}
answer = squareOfSum - sumOfSquare  //25164150

// Q4 - What is the smallest positive number that is evenly divisible by
// all of the numbers from 1 to 20?
function isPrime(value){
  let isPrime = true
  if(value == 0 || value == 1){
    return false
  }
  for(let i = 2; i <= Math.sqrt(value); i++){
    if(value % i == 0)
      return false
  }
  return true
}

function multItselfLessTwenty(value){
  while(value * value < 20)
    value *= value
  return value
}

let result = 1
for(let i = 0; i <= 20; i++){
  if(isPrime(i))
    result *= multItselfLessTwenty(i)
}
answer = result  //232792560

// Q5 - What is the largest prime factor of the number 600851475143 ?
let number = 600851475143
let largestPrimeFactor, prime, i = 0

while(number != 1){
  if(isPrime(i))
    divideNumber(i)
  i++
}

function divideNumber(prime){
  while(number % prime == 0){
    number /= prime
    largestPrimeFactor = prime
  }
}
answer = largestPrimeFactor  //6857

// Q6 - Find the largest palindrome made from the product of  two 3-digit numbers.
function isPalindrome(value){
  let isPalindrome = true, array = [], thingToPush
  while(value != 0){
    lastDigit = value % 10
    array.push(lastDigit)
    value = parseInt(value / 10) //delete last digit
  }
  for(let i = 0; i < array.length / 2; i++){
    if(array[i] != array[array.length - i -1]) //check first and last sequantially
    isPalindrome = false
  }
  return isPalindrome
}

number = 999 + 999  //because largest 3-digit number is 999
while(number){
  if(number % 2 == 0){
    valueOne = number / 2
    valueTwo = number / 2 
  }
  else{
    valueOne = parseInt(number / 2) + 1
    valueTwo = parseInt(number / 2)
  }
  while(valueOne < 1000){
    thingToCheck = valueOne * valueTwo
    if(isPalindrome(thingToCheck)){
      break
    }
    valueOne++
    valueTwo--
  }
  if(isPalindrome(thingToCheck)){
    break
  }
  number--
}
answer = thingToCheck  //906609

// Q7 - What is the 10 001st prime number?
number = 0
let primeCounter = 0
while(primeCounter < 101){ //change 101 to 10001 for answer
  if(isPrime(number))
    primeCounter++
  number++
}
number--  //because number increases when exiting the loop

answer = number  //104743

// Q8 - There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc. a < b < c 
function isPythagoreanTriplet(a, b, c){
  result = true
  if(a*a + b*b != c*c)
  return false
  return result
}
let a, b , c = 1000  //most biggest possible for c

while(c > 333){  //most smallest possible for c
  c--
  a = 1
  b = 1000 - (a + c) 

  do{
    if(isPythagoreanTriplet(a, b, c))
      break
    ++a; --b
  }while(b > a)

  if(isPythagoreanTriplet(a, b, c))
    break
}
answer = a * b * c  //31875000

// Q9 - Find the thirteen adjacent digits in the 1000-digit number that have the 
// greatest product. What is the value of this product?
number = "This number is contains in https://projecteuler.net/problem=8"
let array = number.split("")
let biggestValue = 0, value = 1; a = 0
for(let i = 0; i < 988; i++){
  for(let j = 0; j < 13; j++){
    value *= array[a + j]
  }
  if(value > biggestValue)
    biggestValue = value
  value = 1
  ++a
}
answer = biggestValue  //23514624000

// Q10 - Find the sum of all the primes below two million.
sum = 0, number = 20//change two million
for(let i = 0; i < number; i++){
  if(isPrime(i))
    sum += i
}
answer = sum  //142913828922

// Q11 - What is the sum of the digits of the number 2^1000?
number = BigInt(Math.pow(2, 1000)).toString()
array = number.split("")
let index = 0; sum = 0

while(array[index]){
  sum += parseInt(array[index])
  index++
}
answer = sum

// Q12 - What is the greatest product of four adjacent numbers in the 
// same direction (up, down, left, right, or diagonally) in the 20×20 grid?
number = "This number is contains in https://projecteuler.net/problem=11"
let numberArray = number.split(" ")

array = [] 
let tempArray = [], greatestProduct = 0, rows = 20, columns = 20

a = 0  //create 20*20 grid
for(let i = 0; i < rows; i++){
  for(let j = 0; j < columns; j++){
    tempArray.push(parseInt(numberArray[a]))
    a++
  }
  array[i] = tempArray
  tempArray = []
}

for(let i = 0; i < rows; i++){
  for (let j = 0; j < columns -3; j++) {
    //check letf and right
    sum = array[i][j] * array[i][j + 1] * array[i][j + 2] * array[i][j + 3]
    if(sum > greatestProduct)
      greatestProduct = sum

    //check up and down
    sum = array[j][i] * array[j + 1][i] * array[j + 2][i] * array[j + 3][i]
    if(sum > greatestProduct)
    greatestProduct = sum
  }
}

for(let i = 0; i < rows -3; i++){
  for(let j = 0; j < columns -3; j++){
    //check diagonally down 
    sum = array[i][j] * array[i + 1][j + 1] * array[i + 2][j + 2] * array[i + 3][j + 3]
    if(sum > greatestProduct)
      greatestProduct = sum

    //check diagonally up 
    sum = array[i + 3][j] * array[i + 2][j + 1] * array[i + 1][j + 2] * array[i][j + 3]
    if(sum > greatestProduct)
      greatestProduct = sum
  }
}
answer = greatestProduct  //70600674

// Q13 - Find the sum of the digits in the number 100!
let factorial = value => {
  let temp = value - 1
  for(temp; temp > 0; temp--){
    value *= temp
  }
  return value
}

number = BigInt(factorial(100)) //! this is a work wrong after 22!
array = number.toString().split("")
//convert to integer back and sum
sum = 0
array.forEach(value => {
  value = parseInt(value)
  sum += value
})
answer = sum  //! 734 but this answer is wrong, this should be 648
//so many hours of attempt i give up and the correct solituon is in this site:
//https://helloacm.com/compute-factorial-digit-sum-find-the-sum-of-the-digits-in-the-number-100/

// Q14 - Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
//! Number is in the site but i didn't solve it because there are too many big numbers.

// Q15 - he following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even), n → 3n + 1 (n is odd)
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it 
// has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

//Which starting number, under one million, produces the longest chain?
function isEven(value){
  if(value % 2 == 0)
    return true
  return false
}

let counter, greatestCounter = 0
for(let number = 1; number < 1000000; number++){
  temp = number
  counter = 0
  while(temp != 1){
    if(isEven(temp)){
      temp /= 2
      counter++
    }
    else{
      temp = 3*temp + 1
      counter++
    }
  }
  if(counter > greatestCounter){
    greatestCounter = counter
    answer = number//837799
  }
  number++
}

// Q16 - The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?

//if number = 2^x * 5^y ,divisor numbers = (x+1) * (y+1)
function countDivisors(value){
  if(isPrime(value))
    return 2  //because '1' and 'value'
  
  let primeDivisor = 2, divisorArray = []
  while(value != 1){
    counter = 0
    while(value % primeDivisor == 0){
      value /= primeDivisor
      counter++
    }
    divisorArray.push(counter)  //we pushed ^x or ^y part.
    while(!isPrime(++primeDivisor)){}//contain prime divisor
  }
  
  temp = 1
  for (let i = 0; i < divisorArray.length; i++) {
    temp *= divisorArray[i] +1  //add 1 need for formula
  }
  return temp
}

//1 + 2 + ... + n = n * (n+1) / 2
function triangleNumbers(value){
  value = value * (value + 1) / 2
  return value
}

let triangleNumber = 1
for(let number = 1; countDivisors(triangleNumber) <=500; number++){
  triangleNumber = triangleNumbers(number)
}
answer = triangleNumber//76576500

// Q17 - Starting in the top left corner of a 2×2 grid, and only being able to move 
// to the right and down, there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

//if we check lattice formula given formula is for (n, k) 'n! / ((n -k)! * k!)
//so we have n = 20 + 20 = 40 dot and k = 20 dot.
answer = factorial(40) / (factorial(40 - 20) * factorial(20)) //! .00003 more
answer = Math.floor(answer) //137846528820

// Q18 - The 12th term, F12 (12th fibonacci) is the first term to contain three digits.
// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
function fibonacci(value){
  if(value == 1 || value == 2)
    return 1
  
  let oldNumber; temp = 1
  number = 1
  for(let i = 2; i < value; i++){
    oldNumber = number
    number += temp
    temp = oldNumber
  }
  return number
}

function digitCounter(value){
  counter = 0
  while(value >= 1){
    value /= 10
    counter++
  }
  return counter
}  //! after 'fibonacci(400)' goes infinity, i will try BigInt()
for(var indexx = 1; digitCounter(fibonacci(indexx)) <= 100; indexx++){}
answer = indexx


console.log("Answer: " + answer )

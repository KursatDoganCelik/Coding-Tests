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
    isPrime = false
    return isPrime
  }
  for(let i = 2; i <= value / 2; i++){
    if(value % i == 0)
      isPrime = false
  }
  return isPrime
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


console.log("Answer: " + answer )

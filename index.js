function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) min = num;
  }
  return min;
}

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) max = num;
  }
  return max;
}

function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

function getEvens(numbers) {
  const evens = [];
  for (const num of numbers) {
    if (num % 2 === 0) evens.push(num);
  }
  return evens;
}

function getOdds(numbers) {
  const odds = [];
  for (const num of numbers) {
    if (num % 2 !== 0) odds.push(num);
  }
  return odds;
}

function convertStringToNumbers(commaSeparatedNumbers) {
  const strings = commaSeparatedNumbers.split(",");
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
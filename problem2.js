// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

function powerCalculator(int, exponent) {
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  // base case

  if (exponent === 2) {
    return int * int;
  }

  // recursive case

  return int * powerCalculator(int, exponent - 1);
}

console.log(powerCalculator(10, 4));

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
  //base case

  if (str === '') {
    return '';
  }

  //recursive case
  const firstChar = str[str.length - 1];

  const restOfStr = str.slice(0, -1);

  return firstChar + reverseString(restOfStr);
}

console.log(reverseString('hello'));

// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

function splitString(string, separator) {
  //base case

  if (!string.includes(separator)) {
    return [string];
  }

  //recursive case

  let partial = string.slice(0, string.indexOf(separator));
  let rest = string.substring(string.indexOf(separator) + 1, string.length);

  return [partial, ...splitString(rest, separator)];
}

console.log(splitString('02/20/2020', '/'));

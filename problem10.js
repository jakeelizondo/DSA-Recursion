// Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

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

function anagrams(str) {
  if (str.lenth === 1) {
    return str;
  } else if (str.length === 2) {
    return [str, reverseString(str)];
  }
  let totalAnagrams = [];
  for (let i = 0; i < str.length; i++) {
    let subAnagram = [];
    subAnagram = subAnagram.concat(
      anagrams(str.substring(0, i) + str.substring(i + 1))
    );
    subAnagram = subAnagram.map((anagram) => str.charAt(i) + anagram);
    totalAnagrams = subAnagram.concat(totalAnagrams);
  }
  return totalAnagrams;
}

console.log(anagrams('east'));

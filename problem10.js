// Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

function anagrams(str, prefix = '') {
  if (str.length === 1) {
    console.log(prefix + str);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentChar = str.substring(i, i + 1);
      let remaining = str.substring(i + 1);
      let previous = str.substring(0, i);
      anagrams(remaining + previous, prefix + currentChar);
    }
  }
}

anagrams('east');

/*
  The goal of this exercise is to convert a string to a new string where each character in the new string is "("
  if that character appears only once in the original string, or ")"
  if that character appears more than once in the original string.
  Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word) {
  const obj = {}; //empty obj to store letters occurencies in the string
  const arr = word.toLowerCase().split(''); //arr from string
  arr.forEach(l => (obj[l] ? obj[l]++ : (obj[l] = 1))); //loop the arr if letter key exist in the object add 1 or add the letter key and the initial value of 1
  return arr.map(lett => (obj[lett] > 1 ? ')' : '(')).join(''); //map the arr and change the letters inside based on their occurencies inside the string
}

console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));

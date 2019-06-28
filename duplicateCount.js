function duplicateCount(text) {
  const obj = {}; //empty obj to store any letter occurencies

  text
    .toLowerCase() //lowercase the string
    .split('') //transform it in an array
    .forEach(l => (obj[l] ? obj[l]++ : (obj[l] = 1))); //create key for any letter and add 1 for any occurency

  //array from obj, filtered to obtain only value more than one...then the length of the array to see how many letters have more than one appearence
  return Object.entries(obj).filter(item => item[1] > 1).length;
}

console.log(duplicateCount('aabBcde'));

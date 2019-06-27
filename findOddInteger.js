function findOdd(A) {
  //create an empty object
  const obj = {};

  //iterate over the array and for any number in it create a key in the object equal to the number. If it exist already add +1 to the corresponding value, set initially to 1
  A.forEach(num => (obj[num] ? obj[num]++ : (obj[num] = 1)));

  //find the key in the object with an odd value and transform the key to a number
  for (let key in obj) {
    if (obj[key] % 2 !== 0) return Number(key);
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

function sortArray(array) {
  //1. create a new array with odds number only and sort it from the min to the max num
  const odds = array.filter(n => n % 2).sort((a, b) => a - b);
  //2. map the original arr, if the num is odd change it with the first element in the odds array, else leave the original even num
  return array.map(num => (num % 2 !== 0 ? odds.shift() : num));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

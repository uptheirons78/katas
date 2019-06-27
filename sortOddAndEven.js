//Odd nums Ascending order, Even nums Descending order
function sortArray(array) {
  //1. create a sorted array for odds nums and another for even nums
  const odds = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  const even = array.filter(n => n % 2 === 0).sort((a, b) => b - a);
  //2. map the original array. If num is odd return the first element of odds arr, instead the first of the even one
  return array.map(n => (n % 2 !== 0 ? odds.shift() : even.shift()));
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11])); //[1, 3, 8, 4, 5, 2, 11]

/**
 * Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqTest(numbers) {
  const arr = numbers.split(' '); //create an array from argument
  const odd = []; //empty array to store odd values
  const even = []; //empty array to store even values
  //let's loop over arr to check for even or odd values and then push them inside its array
  arr.forEach(n => {
    return n % 2 !== 0 ? odd.push(n) : even.push(n);
  });

  //find the length of odds array, if it is just one, find the index of the element inside arr and add one,
  //instead find the index of even array and add one.
  return odd.length === 1 ? arr.indexOf(odd[0]) + 1 : arr.indexOf(even[0]) + 1;
}

iqTest('2 4 7 8 10');
iqTest('1 2 1 1');

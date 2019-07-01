var moveZeros = function(arr) {
  const zeros = arr.filter(n => n === 0); //create an array with only zeros
  const noZeros = arr.filter(n => n !== 0); //create another array with all non zero numbers
  return noZeros.concat(zeros); //merge the two arrays together!
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]

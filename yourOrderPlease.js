function order(words) {
  const arr = words
    .split(' ') //create an array with words
    .map(item => [
      //map it to have a new arr with diff arrays containing the word and the number in the word
      item,
      parseInt(
        item
          .replace(/\D/gi, '')
          .split('')
          .join('')
      )
    ])
    .sort((a, b) => a[1] - b[1]); //sort it from lower to higher
  return arr.map(word => word[0]).join(' '); //map it again to leave only words and then join to have the ordered string!
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

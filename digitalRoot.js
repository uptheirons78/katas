function digital_root(n) {
  //1. write a func to split n in an array of digit and the sum them;
  const sum = num =>
    num
      .toString()
      .split('')
      .map(n => Number(n))
      .reduce((acc, val) => acc + val, 0);
  //2. ternary operator: if result has more than one digit run again the sum() function on it or return the result of sum()
  return sum(n).toString().length > 1 ? sum(sum(n)) : sum(n);
}

console.log(digital_root(7787)); //11

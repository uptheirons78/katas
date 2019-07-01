function rgb(r, g, b) {
  const arr = Array.from(arguments); //array from arguments
  const hex = arr
    .map(n => (n > 255 ? 255 : n)) //if a value is more than 255 return 255
    .map(n => (n < 0 ? 0 : n)) //if a value is less than 0 return 0
    .map(n => n.toString(16).toUpperCase()) //return hexadecimal values from the numbers inside the arr and uppercase it
    .map(n => (n.length !== 1 ? n : `0${n}`)); //if a value has a length of 1 add a 0 in front of it

  return hex.join('');
}

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3

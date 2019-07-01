function toCamelCase(str) {
  if (str === '') {
    return ''; //if a string is empty, return an empty one
  } else {
    const myStr = str
      .replace(/\-|_/g, ' ') //replace all dashes or underscores inside the string
      .split(' ') //create an array of words
      .map(w => w[0].toUpperCase() + w.slice(1)) //uppercase the first letter of any words
      .join(''); //join the array
    //if the first letter of the original string is uppercase, return myStr with any words camelcased,
    //else, return any words camelcased except the first one
    return str[0] == str[0].toUpperCase() ? myStr : myStr[0].toLowerCase() + myStr.slice(1);
  }
}

toCamelCase('');

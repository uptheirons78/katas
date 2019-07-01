function hexStringToRGB(hexString) {
  let str = hexString.replace('#', ''); //remove # from hexString
  let arr = [];
  let myArr = str.split('');

  while (myArr.length) {
    arr.push(myArr.splice(0, 2)); //push inside arr values pairs from hexString
  }

  const rgbValues = arr.map(n => parseInt(n.join(''), 16)); //convert any pairs from hexadecimals with parseInt()
  return { r: rgbValues[0], g: rgbValues[1], b: rgbValues[2] }; //return rgb object
}

hexStringToRGB('#FF9933');

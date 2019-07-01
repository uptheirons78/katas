function rot13(message) {
  let arr = message.split('');
  const rotArr = arr.map(lett => {
    if (/[a-zA-z]/.test(lett)) {
      if (lett.charCodeAt(0) >= 65 && lett.charCodeAt(0) <= 90) {
        if (lett.charCodeAt(0) >= 65 && lett.charCodeAt(0) < 78) {
          return String.fromCharCode(lett.charCodeAt(0) + 13);
        } else {
          return String.fromCharCode(lett.charCodeAt(0) - 13);
        }
      } else if (lett.charCodeAt(0) >= 97 && lett.charCodeAt(0) <= 122) {
        if (lett.charCodeAt(0) >= 97 && lett.charCodeAt(0) < 110) {
          return String.fromCharCode(lett.charCodeAt(0) + 13);
        } else {
          return String.fromCharCode(lett.charCodeAt(0) - 13);
        }
      }
    } else {
      return lett;
    }
  });

  return rotArr.join('');
}

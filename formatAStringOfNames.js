function list(names) {
  let arr = names.map(w => w['name']);
  let l = arr.length;
  if (l > 2) {
    let a = arr.splice(0, l - 1);
    return `${a.join(', ')} & ${arr.join('')}`;
  } else if (l === 2) {
    return `${arr[0]} & ${arr[1]}`;
  } else if (l === 1) {
    return arr[0];
  }
  return '';
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));

/**
 * Pig Latin is an English language game where the goal is to hide the meaning of a word from people not aware of the rules.

The rules themselves are rather easy:

1) The word starts with a vowel(a,e,i,o,u) -> return the original string plus "way".

2) The word starts with a consonant -> move consonants from the beginning of the word to the end of the word until the first vowel, then return it plus "ay".

3) The result must be lowercase, regardless of the case of the input. If the input string has any non-alpha characters, the function must return None, null, Nothing (depending on the language).

4) The function must also handle simple random strings and not just English words.

5) The input string has no vowels -> return the original string plus "ay".

For example, the word "spaghetti" becomes "aghettispay" because the first two letters ("sp") are consonants, so they are moved to the end of the string and "ay" is appended.
 */

function pigLatin(string) {
  let myStr = string.toLowerCase(); //new lowercased string
  const vowels = /[a,e,i,o,u]/gi; //vowels greedy regex
  if (/\d/gi.test(myStr)) {
    return null; //if in the string there are non-alpha chars return null
  } else {
    if (!vowels.test(myStr)) {
      return (myStr += 'ay'); //no vowels in the string return it plus 'ay'
    } else {
      if (/[a,e,i,o,u]/.test(myStr[0])) {
        return (myStr += 'way'); //if first letter is a vowel return str + 'way'
      } else {
        //if first letter is a consonant
        let index = myStr.match(/[a,e,i,o,u]/).index; //find the index of the first vowel
        let firstPart = myStr.slice(0, index); //slice from start to first vowel (excluded)
        let secondPart = myStr.slice(index); //slice from first vowel to the end
        return (secondPart += firstPart += 'ay'); //return secondPart plus firstPart and add 'ay'
      }
    }
  }
}

console.log(pigLatin('map'));
console.log(pigLatin('egg'));
console.log(pigLatin('tes3t5'));
console.log(pigLatin('spaghetti'));
console.log(pigLatin('mpps'));

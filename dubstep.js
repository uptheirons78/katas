//Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space. Remove WUB
function songDecoder(song) {
  const regex = /WUB/gi; //WUB regex
  return song
    .replace(regex, ' ') //replace WUB with a space
    .replace(/\s{2,}/g, ' ') //remove double spaces
    .trim(); //remove spaces from start and end
}

console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
console.log(songDecoder('WUBAWUBBWUBCWUB'));

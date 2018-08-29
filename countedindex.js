function countLetters(string) {
  // body...
  var counted = {};

  for (var i = 0; i < string.length; i++) {
    if(string[i] !== " ") {
      var key = string[i];
      if(counted[key]) {
        counted[key].push(i);
      } else {
        counted[key] = [i];
      }
    }
  }
  return counted;
}


/*
{
  l: [0],
  i: [1,10],
  g: [2],
  h: [3, 5, x]
}
*/

console.log(countLetters("lighthouse in the house"));
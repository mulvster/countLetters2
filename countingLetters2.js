function countLetters(str) {
  var letters = {};
  var letterIndex = [];
  for (var i = 0; i < str.length; i++) {
    // Letter doesn't exist just count as 1 for now
    if (letters[str[i]] === undefined) {
      //adding to empty object the index and count.
      letters[str[i]] = {
        count: 1,
        position: [i]
      };

    } else {
      //access count property increment by one
      //push index into empty object.
      letters[str[i]].count += 1;
      letters[str[i]].position.push(i);
    }
  }
  return letters;
}
// Preparing the string passed from CL
var userString = process.argv.slice(2).join("");
console.log(countLetters(userString));

// letters[str[i]].position.push(i);
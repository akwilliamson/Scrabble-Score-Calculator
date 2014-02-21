var scrabbleScore = function(userWord) {
  var score = 0;
  var userWordArray = userWord.split("");
  var alphabet = {'a': 1,'e': 1,'i': 1,'o': 1,'u': 1,'l': 1,'n': 1,'r': 1,'s': 1,'t': 1,'d': 2,'g': 2,'b': 3,'c': 3,'m': 3,'p': 3,'f': 4,'h': 4,'v': 4,'w': 4,'y': 4,'k': 5,'j': 8,'x': 8,'q': 10,'z': 10}
  userWordArray.forEach(function(letter) {
    score += alphabet[letter]
  });
return score;
};

$(document).ready(function() {
  $("form#scrabble").submit(function(event) {
    var word = ($("input#word").val());
    var result = scrabbleScore(word);
    $(".word").text(result);
    $("#result").show();
    event.preventDefault();
  });
});

// var scrabbleScore = function(userinput) {
//   var onePointLetters = ["a","e","i","o","u","l","n","r","s","t"];
//   for (var i = 0; i < onePointLetters.length; i++)
//     if (userinput.toLowerCase() === onePointLetters[i]) {
//     return 1;
//   }
//   var twoPointLetters = ["d","g"];
//   for (var i = 0; i < twoPointLetters.length; i++)
//     if (userinput.toLowerCase() === twoPointLetters[i]) {
//     return 2;
//   }
//   var threePointLetters = ["b","c","m","p"];
//   for (var i = 0; i < threePointLetters.length; i++)
//     if (userinput.toLowerCase() === threePointLetters[i]) {
//     return 3;
//   }
//   var fourPointLetters = ["f","h","v","w","y"];
//   for (var i = 0; i < fourPointLetters.length; i++)
//     if (userinput.toLowerCase() === fourPointLetters[i]) {
//     return 4;
//   }
//   var fivePointLetters = ["k"];
//   for (var i = 0; i < fivePointLetters.length; i++)
//     if (userinput.toLowerCase() === fivePointLetters[i]) {
//     return 5;
//   }
//   var eightPointLetters = ["j","x"];
//   for (var i = 0; i < eightPointLetters.length; i++)
//     if (userinput.toLowerCase() === eightPointLetters[i]) {
//     return 8;
//   }
//   var tenPointLetters = ["q","z"];
//   for (var i = 0; i < tenPointLetters.length; i++)
//     if (userinput.toLowerCase() === tenPointLetters[i]) {
//     return 10;
//   }
// };

// var wordScore = function(userinput) {
//   var score = 0;
//   var userInputArray = userinput.split("");
//   for (var i = 0; i < userInputArray.length; i++) {
//     score += scrabbleScore(userInputArray[i]);
//   }
// return score;        
// };













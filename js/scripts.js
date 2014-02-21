var scrabbleScore = function(userinput) {
  var onePointLetters = ["a","e","i","o","u","l","n","r","s","t"];
  for (var i = 0; i < onePointLetters.length; i++)
    if (userinput.toLowerCase() === onePointLetters[i]) {
    return 1;
  }
  var twoPointLetters = ["d","g"];
  for (var i = 0; i < twoPointLetters.length; i++)
    if (userinput.toLowerCase() === twoPointLetters[i]) {
    return 2;
  }
  var threePointLetters = ["b","c","m","p"];
  for (var i = 0; i < threePointLetters.length; i++)
    if (userinput.toLowerCase() === threePointLetters[i]) {
    return 3;
  }
  var fourPointLetters = ["f","h","v","w","y"];
  for (var i = 0; i < fourPointLetters.length; i++)
    if (userinput.toLowerCase() === fourPointLetters[i]) {
    return 4;
  }
  var fivePointLetters = ["k"];
  for (var i = 0; i < fivePointLetters.length; i++)
    if (userinput.toLowerCase() === fivePointLetters[i]) {
    return 5;
  }
  var eightPointLetters = ["j","x"];
  for (var i = 0; i < eightPointLetters.length; i++)
    if (userinput.toLowerCase() === eightPointLetters[i]) {
    return 8;
  }
  var tenPointLetters = ["q","z"];
  for (var i = 0; i < tenPointLetters.length; i++)
    if (userinput.toLowerCase() === tenPointLetters[i]) {
    return 10;
  }
};

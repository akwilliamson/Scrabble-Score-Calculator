describe('scrabbleScore', function() {
  it('returns 1 for an inputted letter that is valued at 1 point', function () {
    scrabbleScore('e').should.equal(1);
  });
  it('returns 2 for an inputted letter that is valued at 2 points', function() {
    scrabbleScore('g').should.equal(2);
  });
  it('returns 3 for an inputted letter that is valued at 3 points', function() {
    scrabbleScore('b').should.equal(3);
  });
  it('returns 4 for an inputted letter that is valued at 4 points', function() {
    scrabbleScore('f').should.equal(4);
  });
  it('returns 5 for an inputted letter that is valued at 5 points', function() {
    scrabbleScore('k').should.equal(5);
  });
  it('returns 8 for an inputted letter that is valued at 8 points', function() {
    scrabbleScore('j').should.equal(8);
  });
  it('returns 10 for an inputted letter that is valued at 10 points', function() {
    scrabbleScore('q').should.equal(10);
  });
});



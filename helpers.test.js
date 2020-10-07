const helpers = require('./helpers');

describe('Test helper functions', () => {
  test('Remove string spaces', () => {
    expect(removeSpaces('once upon a time')).toBe('onceuponatime');
    expect(removeSpaces('  once upon a time  ')).toBe('onceuponatime');
  });

  test('Counting words from given string', () => {
    expect(getWordCount('once upon a time')).toBe(4);
    expect(getWordCount('once upon a time 2 be')).toEqual(6);
  });

  test('Test removing non-alphabetical characters', () => {
    expect(removeNonLetters('onceup!onatime2to')).toBe('onceuponatimeto');
  });

  test('String to alphabetical array', () => {
    expect(sortLetters('a')).toEqual(['a']);
    expect(sortLetters('ba')).toEqual(['a', 'b']);
    expect(sortLetters('bab')).toEqual(['a', 'b', 'b']);
  });

  test('Remove duplicate characters from array', () => {
    expect(removeDuplicateCharacters(['a'])).toEqual(['a']);
    expect(removeDuplicateCharacters(['a', 'b'])).toEqual(['a', 'b']);
    expect(removeDuplicateCharacters(['b', 'a'])).toEqual(['b', 'a']);
    expect(removeDuplicateCharacters(['b', 'b', 'a'])).toEqual(['b', 'a']);
    expect(removeDuplicateCharacters(['a', 'a', 'a'])).toEqual(['a']);
  });

  test('Convert array to object array', () => {
    expect(countCharacterOccurrences(['a', 'b'], ["a", "a", "b"])).toEqual([{"a":2}, {"b":1}]);
  });

    test('Occurrences in an array', () => {
        expect(getOccurrence(["a", "a", "b"], "a")).toBe(2);
    });

    test('Get character occurrences in string', () => {
      expect(getCharacterOccurrences("good")).toEqual([{"d": 1},{"g": 1}, {"o": 2}]);
    });

});

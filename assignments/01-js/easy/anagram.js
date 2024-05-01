/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  if (n !== m) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i=0; i<n; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;

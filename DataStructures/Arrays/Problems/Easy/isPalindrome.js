/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanedString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleanedString === cleanedString.split(" ").reverse().join("");
};

let s = "A man, a plan, a canal: Panama";

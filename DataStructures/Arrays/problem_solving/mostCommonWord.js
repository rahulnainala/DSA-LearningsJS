/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // Normalize the paragraph and split into words
  let words = paragraph
    .toLowerCase()
    .replace(/[^a-z\s]/g, " ") // Replace non-alphabetic characters with spaces
    .split(/\s+/); // Split by whitespace

  // Create a map to count word frequencies
  let wordCount = new Map();
  for (let word of words) {
    if (!banned.includes(word) && word !== "") {
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
  }

  // Find the most common word
  let mostCommon = "";
  let maxCount = 0;
  for (let [word, count] of wordCount.entries()) {
    if (count > maxCount) {
      mostCommon = word;
      maxCount = count;
    }
  }

  return mostCommon;
};

// Example usage
let para = "Bob hit a ball, the hit BALL flew far after it was hit.";
let ban = ["hit"];
console.log(mostCommonWord(para, ban)); // Output: "ball"

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxN = 0;
  for (let n of candies) {
    if (n > maxN) maxN = n;
  }
  let finalArray = candies.map((candiesCount) => {
    return candiesCount + extraCandies >= maxN;
  });
  return finalArray;
};

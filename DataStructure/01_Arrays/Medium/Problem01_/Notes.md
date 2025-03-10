    1.	Initialize variables:
    •	maxEndingHere = 0 (Tracks the current subarray sum)
    •	maxSoFar = -Infinity (Stores the maximum sum found so far)
    2.	Iterate through the array:
    •	Add the current element to maxEndingHere
    •	Update maxSoFar if maxEndingHere is greater
    •	If maxEndingHere becomes negative, reset it to 0 (since a negative sum won’t help maximize the subarray)
    3.	Return maxSoFar, which contains the maximum subarray sum.

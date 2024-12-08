//BubbleSort  implementation

function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    //Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      //checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        //if condition is true
        //then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547];

bubbleSort(arr);

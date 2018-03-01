function bubbleSort(array) {

  /* your code here */

  var arr = [];

  if (array.length <= 1) {
    return array;
  }



  // for(var i = 0; i < array.length-1; i++){
  //   if (array[i] > array[i+1]){
  //      var temp = array[i];
  //     array[i] = array[i+1];
  //     array[i+1] = temp;
  //   }
  // }

  swap(array);

  arr.push(array[array.length-1]);

// arr = arr.concat(bubbleSort(array.slice(0,-1)));
arr = bubbleSort(array.slice(0,-1)).concat(arr);
  // arr.unshift(bubbleSort(array.slice(0,-1)));

  //console.log(array);

  return arr;
}

function swap(array){
  for(var i = 0; i < array.length-1; i++){
    if (array[i] > array[i+1]){
       var temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
    }
  }
}

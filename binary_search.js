function binarySearch(data,val){
  var low = 0;
  var high = data.length-1;
  var mid = Math.floor((low + high)/2);

  while( val !== data[mid]){
      if(val > data[mid]){
        low = mid;
        mid = Math.floor((high+low)/2);
      } else if(val < data[mid]){
        high = mid;
        mid = Math.floor((high+low)/2);
      }
  };
  console.log(mid);
}

var data = [1,2,3,4,5,6,7,8,9,12,15,18];

binarySearch(data, 12);

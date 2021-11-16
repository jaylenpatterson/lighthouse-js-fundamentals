const repeatNumbers = function(data) {
  let str = "";

  for(let i = 0; i < data.length; i++){
    let num = data[i][0];
    let repeatNum = data[i][1];
    str += ",";

    for(let i = repeatNum; i > 0; i--){
      str += num;
    }
  }

  return str.slice(1);
};



console.log(repeatNumbers([[1, 10]])); 
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

1111111111
11, 222
10101010, 343434343434, 9292

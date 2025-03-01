const arr = [1, 2, 3, 4, 5];

function addEle(arr, ele) {
  arr.push(ele);
  return arr;
}

function delEle(arr, ele) {
  const ind = arr.indexOf(ele);
  if (ind > -1) {
    arr.splice(ind, 1);
  }

  return arr;
}

addEle(arr, 41);

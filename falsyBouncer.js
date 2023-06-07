function bouncer(arr) {
  let falseArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      falseArr.push(arr[i]);
    }
  }
  return falseArr;
}

bouncer([7, "ate", "", false, 9]);

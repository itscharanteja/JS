// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"    
}
  
  result = lookup[val];
  
  // Only change code above this line
  return result;
}

var a =phoneticLookup("charlie");
console.log(a);
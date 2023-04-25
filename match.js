let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let a = twinkleStar.match(starRegex); // Change this line
console.log(a)

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
console.log(result)

let quoteSampl = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result1 = quoteSampl.match(vowelRegex); // Change this line
console.log(result1)

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s0-9]/gi; // Change this line
let result2 = quoteSample.match(myRegex); // Change this line // Change this line
console.log(result2)

let text = "<h1>Winter is coming</h1>";
let myRegex1 = /<.*?>/; // Change this line
let result4 = text.match(myRegex1);
console.log(result4)
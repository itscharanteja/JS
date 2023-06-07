var bott = 100;

while (bott>0){
    var word = "bottle";
    if (bott === 1) {
        word = "bottles";
    } 
    console.log(bott + " " + word + " of beer on the wall");
    console.log(bott + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
	bott--;
    console.log(bott + " " + word + " of beer on the wall.");
}
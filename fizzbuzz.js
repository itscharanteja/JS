var out = [];
var count = 1;


function fizzbuzz(){
    while(count<=100){
        if (count %3 == 0 && count % 5  == 0){
        out.push("FizzBuzz");
        
        }
        else if (count % 3 == 0){
            out.push("Fizz");
            
        }
        else if(count % 5 == 0){
            out.push("Buzz");
            
        }
        else{
            out.push(count);
        }
        count++;
        // console.log(out);
    }
    console.log(out);
}

fizzbuzz();
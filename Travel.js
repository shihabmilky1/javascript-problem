var depth = 11;
var animal= 0;
if(depth <=10){
    animal = depth * 50;
}
else if(depth <= 20){
   var fristPart = 10  * 50;
   var remaining = depth - 10;
   var secoendPart = remaining * 100;
   animal = fristPart + secoendPart;
}
else{
    var fristPart = 10 * 50;
    var secoendPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
     animal = fristPart + secoendPart+ thirdPart;
}
console.log(animal);
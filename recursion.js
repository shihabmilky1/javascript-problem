function fctorial(num){
    var fact = 1;
    for(var i = 1; i<=num; i++){
       fact= fact * i;
    }
  return fact;
}
var result = fctorial(5);
console.log('result', result);
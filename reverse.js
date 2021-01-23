function reverseString(str){
    var reverse = '';
    for(var i=0; i<str.length; i++){
        var car = str[i];
        reverse = car + reverse;
    }
    return reverse;
}



var statement = "Hello Alian vai Brother";
var forA = reverseString(statement);
console.log(forA);
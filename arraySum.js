function arrayTotal(numbers){
        var sum = 0;
    for(var i = 0; i<numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
//
var numbers = [40, 45, 55, 89, 86, 88, 21, 12] ;
var result = arrayTotal(numbers);
console.log(result);
//

var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];
var allfriend = "";

for(var i =0; i<friends.length; i++){
    var name = friends[i];
    allfriend = allfriend + " "+ name;
}
console.log(allfriend);
var marks = [12, 45, 65, 21, 6, 68];
var max = marks[0];//bigest number in array
for(var i = 0; i<marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);

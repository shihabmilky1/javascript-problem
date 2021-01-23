 var speech ='he AND mask is   1 bit per pixel regardless of the color depth specified by the BMP header';
var count =0;
for(var i =0; i<speech.length; i++){
    var cark = speech[i];
    if(cark == 0){
        count++;
    }
}
console.log(count);

// var a=0;
// for(var i=0; i <speech.length; i++){
//     var c = speech[i];
//     if(c == " " && speech[i-1] != " " ){
//         a++;
//     }
// }
// console.log(a);

var sentence = "I am hardworking. I am serious. I am sure I will do it";

var count = 0;

for(var i = 0; i < sentence.length; i++){

    var letter = sentence[i];

    if(letter == 'a'){

        count++;

    }

}

console.log(count)
var numbers = [64, 54, 56, 45, 65, 45, 62, 65, 65]
 for (var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    if(num > 50){
        continue;
    }
    console.log(num);
 }
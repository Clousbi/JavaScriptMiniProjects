function somaMultiplos(num1, num2){
    var soma = 0;
    for (var i = 0; i <= num2; i ++){
        if(i % num1 == 0){
            soma = soma + i;
        }
    }
    console.log(soma);
}

var num1 = 5;
var num2 = 20;

somaMultiplos(5,20);
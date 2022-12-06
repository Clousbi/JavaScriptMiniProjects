function nomeDaFunção(){
    console.log ('esse teste funciona');
}

function nome (name){
    console.log('Meu nome é' + ' ' + name );
}

function parImpar (num1){
    if (num1 % 2 == 0){
        console.log("o número" + " " + num1 + " " + "é par");
    }else{
        console.log("o número"+ " " + num1 + " " + "é impar");
    }
}

function quadrado (num1){
    var quadrado;
    quadrado = num1 * num1;
    return quadrado;
}

function equação(num1, num2, num3){
    var equação = (num1 + num2) / num3;
    return equação;
}

nomeDaFunção(); // função 1
nome('Bianca'); // função 2
parImpar (2); // função 3
parImpar (3); // função 3
console.log (quadrado (2)); // função 4

var equaçãoDaFunção = equação(2,4,3); // função 5
console.log(equaçãoDaFunção);
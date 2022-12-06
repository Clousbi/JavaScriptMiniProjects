//exercicio 1

function imcCalculo (peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

function tabelaImc (imc){
    if (imc < 18.5){
        console.log ('abaixo do peso');
    }else if (imc >= 18.5 && imc < 25){
        console.log ('normal');
    }
    else if (imc >= 25 && imc < 30){
        console.log ('acima do peso');
    }
    else if (imc >= 30 && imc < 40){
        console.log ('obeso');
    }else{
        console.log ('obesidade grave');
    }
}

function main(){
    var imc;
    imc = imcCalculo(75, 1.75);
    tabelaImc (imc); 
}

main();


//exercicio 2

function alturaFilhoCalculo (alturaMae, alturaPai){
    var alturaFilho = (alturaMae+alturaPai)/2;
    return alturaFilho;
}

function main(){
    var alturaMae = 1.76;
    var alturaPai = 1.70;
    var alturaFilho = alturaFilhoCalculo(alturaMae, alturaPai);
    console.log(alturaFilho);
}

//exercicio 1

class carros {
    marca;
    cor;
    gastoMédioKM(quilometros, preço){
        var gastoMédio = quilometros * preço;
        console.log ('o gasto médio de gasolina é ' + gastoMédio);
    };
};

function main (){
    const carro1 = new carros();
    carro1.marca = 'fiat';
    carro1.cor = 'azul';
    carro1.gastoMédioKM(23,3.25);

    console.log(carro1);
}

main();

//exrcicio 2

class pessoas {
    nome;
    peso;
    altura;
    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(){
        return this.peso / Math.pow (this.altura, 2);
    }
}

function main(){
    const pessoa1 = new pessoas ('Maria', 85, 1.70);
    const pessoa2 = new pessoas ('Fernanda', 50, 1.60);

    console.log (pessoa1);
    console.log (pessoa2);
    console.log (pessoa1.imc());
}

main();
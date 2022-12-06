class pessoa {
    Nome;
    Idade;
    Sexo;
    CPF;
    Telefone;
};

class livro  { //função dentro da classe
    Nome;
    PreçoOriginal;
    Construtor(Nome, PreçoOriginal){
        this.PreçoOriginal = PreçoOriginal;
        this.Nome = Nome;
    }
    Desconto(){
        var porcentagem = this.PreçoOriginal * 0.3;
        var desconto = this.PreçoOriginal - porcentagem;
        console.log("O livro" + this.Nome + " fica " + desconto + " com desconto.");
    }
};

const joão = new pessoa();
console.log (joão);
//
joão.Nome = 'João';
joão.Idade= 18;
joão.Sexo= 'Masculino';
joão.CPF= 12345678910;
joão.Telefone= 958412336;

console.log (joão);
//
const livro1 = new livro();
livro1.Nome = 'A origem das coisas';
livro1.PreçoOriginal = 54.90;
livro1.Desconto();

const objeto = { //parecido com tabela sql
    Atributo1: 'Valor',
    Atributo2: 'Valor',
    Atributo3: 'Valor',
    Atributo4: 'Valor',
    Atributo5: 'Valor'
};

const pessoa = {
    Nome: 'João',
    Idade: 18,
    Sexo: 'Masculino',
    CPF: 12345678910,
    Telefone: 958412365
};

const livro = { //função dentro do objeto
    Nome: 'A culpa das estrelas',
    PreçoOriginal: 25.50,
    Desconto: function (){
        var porcentagem = this.PreçoOriginal * 0.3;
        var desconto = this.PreçoOriginal - porcentagem;
        return desconto;
    }
};


console.log (objeto.Atributo1);
console.log (pessoa.Nome);
console.log (pessoa);
//
pessoa.Altura = 1.82; //adicionar
console.log (pessoa);
//
delete pessoa.Altura; //deletar
console.log (pessoa);
//
console.log (livro.Desconto());
//
console.log(livro['Nome']); //acessar o objeto pela string
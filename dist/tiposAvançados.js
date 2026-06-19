const dadosPessoa = {
    conta: 123,
    agencia: 144,
    banco: 'brasil',
    nome: 'Jose',
    email: 'jose@gmail.com',
    cpf: 12345678998
};
console.log(dadosPessoa);
function exibirIdentificador(id) {
    if (typeof id === "number") {
        return 'Id numerico';
    }
    if (typeof id === "string") {
        return 'Id alfabetico';
    }
    throw new Error("Id invalido!");
}
console.log(exibirIdentificador(123));
console.log(exibirIdentificador('jhhbb'));
//INSTANCEOF//
class Carro {
    nome;
    marca;
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto {
    nome;
    ano;
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculs(veiculo) {
    if (veiculo instanceof Carro) {
        return `O nome do veiculo é ${veiculo.nome} da marca ${veiculo.marca}`;
    }
    else if (veiculo instanceof Moto) {
        return `O nome do veiculo é ${veiculo.nome} do ano ${veiculo.ano}`;
    }
}
const carro = new Carro('Mustag', 'Ford');
console.log(detalhesVeiculs(carro));
const moto = new Moto('Ninja', 2024);
console.log(detalhesVeiculs(moto));
;
;
function exibirInformacoes(pessoa) {
    if ("cargo" in pessoa) {
        return `Funcionário: ${pessoa.nome}, Cargo: ${pessoa.cargo}`;
    }
    else {
        return `Cliente: ${pessoa.nome}, Limite: ${pessoa.limiteCredito}`;
    }
}
;
const funcionario = {
    nome: 'Marcelo',
    cargo: 'Dev',
};
const cliente01 = {
    nome: 'Maria',
    limiteCredito: 10,
};
console.log(exibirInformacoes(funcionario));
console.log(exibirInformacoes(cliente01));
//EX 3 - Type Casting (conversão de tipos)
/*uma forma de instruir o compilador a tratar uma variável ou valor como um tipo específico, sobrescrevendo a tipagem anterior */
// AS //
let nome = "Texto";
console.log(nome.toLowerCase()); //converter para minúsculas
// <> //
let cpf = "123.456.789-85";
let tamanho = cpf.length;
console.log(tamanho);
const arquivoAudio = 'mp4';
console.log(arquivoAudio);
export {};
//EX 5 - MappedTypes (Tipos Mapeados) -video 79
// Ex 6 - Satisfies Operator
/*permite verificar se uma expressão está em conformidade com um tipo específico */ 

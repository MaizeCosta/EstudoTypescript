//EX 1
let men = "Olá, Maize";
console.log(men);
//EX2 - Array
let frutas = ["Maça", "Manga", "Uva"];
console.log(frutas);
frutas.splice(1, 1); //remove um item no index x
console.log(frutas);
let carro = ['ford', 'byd'];
console.log(carro[1]);
carro.push('Fiat'); //colocar
console.log(carro);
let nome = ['maize', 'alana', 'luna'];
console.log(nome.length);
let listaLetras = ['a', 'b', 'c'];
listaLetras = [...listaLetras, 'd', 'e']; //Array com Spread Operator 
function funcaoLetras(letras) {
    for (let i = 0; i < letras.length; i++) {
        console.log(letras[i]);
    }
}
funcaoLetras(listaLetras);
//EX 2 - Objeto
let pessoa;
pessoa = {
    nome: "Marcos",
    idade: 12,
    peso: 40
};
console.log(`${pessoa.nome} tem ${pessoa.idade} anos e pesa ${pessoa.peso} kilos`);
//EX 3 - Função
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(5, 8));
//EX 4 - Tupla
let animal;
animal = ['cachorro', 'marrom', 3];
console.log(animal);
console.log(animal[0]); //acessando valor da tupla
//Tupla como Argumento de Função
function confiGamer(nome, idade) {
    console.log(`${nome} possui ${idade} anos!`);
}
let usuario = ['Davi', 8];
confiGamer(...usuario);
//tupla com spread operator
let listafrutas = ['Maça', 'Uva', 'Laranja'];
console.log(...listafrutas); //Maça Uva Laranja
console.log(listafrutas); //[ 'Maça', 'Uva', 'Laranja' ]
//tupla com labels
let aluno = [8, 10];
console.log(aluno);
//Tupla Heterogenia 
let situacao = ['Aprovado', ...aluno];
console.log(situacao);
function criarPessoa(...a) {
    return [...a];
}
console.log(criarPessoa('Maize', 'Silva'));
// Ex 5 - Enum (pode ser numero ou string)
var Comida;
(function (Comida) {
    Comida["Pizza"] = "pizza";
    Comida["Hamburguer"] = "Hamburguer";
    Comida["Sorvete"] = "Sorvete";
})(Comida || (Comida = {}));
console.log(`Minha comida preferida é ${Comida.Hamburguer}`);
//EX 6 - Any
//EX 7 - Unknown (não sabe qual tipo definir)
//EX 8 - Void (não retorna um valor)
function logErro(erroMensage) {
    console.log(erroMensage);
}
const logErro2 = (erroMensage) => {
    console.log(erroMensage);
};
logErro('invalido');
logErro2('Invalido2');
//EX 9 - NULL (ausência intencional de valor)
//EX 10 - UNDEFINED (variável não inicializada)
//EX 11 - NEVER (Não podemos atribuir valor a esse tipo/ Retorno de função que gera erro)
function erro(mensagem) {
    throw new Error(mensagem);
}
//console.log(erro('Algo deu erro!'))
function rejectMessage() {
    return erro('Algo deu erro2!');
}
function verificar(usuario) {
    switch (usuario) {
        case "admin":
            console.log("Administrador");
            break;
        case "aluno":
            console.log("Aluno");
            break;
        default:
            const erro = usuario;
    }
}
;
//EX 12 - Tipo Object (representa os valores que não são tipo primitivos)
/* */
const pessoaObjeto = {
    nomeO: 'Maize',
    idadeO: 15,
    alturaO: 180
};
console.log(pessoaObjeto);
//Objeto como parâmetro de função
function boasVindas(funcionario) {
    return `Seja bem-vindas ${funcionario.nome}`;
}
console.log(boasVindas({ nome: 'Alana' }));
;
function frase(pessoa) {
    return `Seja bem-vindas ${pessoa.nome}, possui ${pessoa.idade} anos.`;
}
console.log(frase({ nome: 'Marleneeeeee', idade: 18 }));
const filha = {
    nome: 'Alana',
    sobrenome: 'Sales',
    idade: 18
};
console.log('Ex de herença ', filha);
const usu = {
    nome: 'Jose',
    email: 'jose@gmail'
};
const adm = {
    nome: 'Jose',
    email: 'jose@gmail',
    adm: true
};
/*function acessarSistem(usu: Usu): Usu {
    return usu;
}*/
function acessarSistem(usu) {
    return usu;
}
console.log(acessarSistem(usu));
console.log(acessarSistem(adm));
//EX 13 - Operador ternario
const idadeVotacao = 18;
const podeVotar = (idadeVotacao >= 18) ? 'Voce é elegível' : 'Não pode votar, espere ficar mais velho';
console.log(podeVotar);
const permissoesUsuario = {
    admin: true,
    editor: true,
    visualizador: false
};
export {};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

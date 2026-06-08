//EX 1
let men: string = "Olá, Maize";
console.log(men);



//EX2 - Array
let frutas: string[] = ["Maça", "Manga", "Uva"];
console.log(frutas);
frutas.splice(1, 1); //remove um item no index x
console.log(frutas);

let carro: Array<string> = ['ford', 'byd'];
console.log(carro[1]);
carro.push('Fiat'); //colocar
console.log(carro);

let nome: Array<string> = ['maize', 'alana', 'luna'];
console.log(nome.length);

let listaLetras: string[] = ['a', 'b', 'c']; 
listaLetras = [...listaLetras, 'd', 'e']; //Array com Spread Operator 

function funcaoLetras(letras:string[]){
    for (let i = 0; i < letras.length; i++) {
        console.log(letras[i]);
    }
}
funcaoLetras(listaLetras);



//EX 2 - Objeto
let pessoa: {
    nome: string;
    idade: number;
    peso: number
}
pessoa= {
    nome: "Marcos",
    idade: 12,
    peso: 40
}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos e pesa ${pessoa.peso} kilos`);




//EX 3 - Função
function multiplicar(a: number, b: number): number{
    return a*b;
}
console.log(multiplicar(5,8));



//EX 4 - Tupla
let animal: [string, string, number];
animal = ['cachorro', 'marrom', 3];
console.log(animal);
console.log(animal[0]);//acessando valor da tupla

        //Tupla como Argumento de Função
        function confiGamer(nome: string, idade: number) {
            console.log(`${nome} possui ${idade} anos!`);
        }
        let usuario: [string, number] = ['Davi', 8];
        confiGamer(...usuario);

        //tupla com spread operator
       let listafrutas: [string, ...string[]] = ['Maça','Uva','Laranja'];
       console.log(...listafrutas);//Maça Uva Laranja
       console.log(listafrutas);//[ 'Maça', 'Uva', 'Laranja' ]

       //tupla com labels
       let aluno: [nota1: number, nota2: number] = [8, 10];
       console.log(aluno);

       //Tupla Heterogenia 
       let situacao: [string, ...number[]] = ['Aprovado', ...aluno];
       console.log(situacao);

       //Labeled Tuples com Spread Operator numa função
       type Nome = |[primeiroNome: string, sobrenome: string] | [primeiroNome: string, nomeMeio: string, sobrenome: string]

       function criarPessoa(...a:Nome){
        return [...a];
       }
       console.log(criarPessoa('Maize', 'Silva'));




// Ex 5 - Enum (pode ser numero ou string)

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
enum Comida{
    Pizza = 'pizza',
    Hamburguer = 'Hamburguer',
    Sorvete = 'Sorvete'
}

console.log(`Minha comida preferida é ${Comida.Hamburguer}`);



//EX 6 - Any
//EX 7 - Unknown (não sabe qual tipo definir)


//EX 8 - Void (não retorna um valor)
function logErro(erroMensage:string): void {
    console.log(erroMensage);
}

const logErro2 = (erroMensage:string): void => {
    console.log(erroMensage);
}

logErro('invalido');
logErro2('Invalido2');



//EX 9 - NULL (ausência intencional de valor)

//EX 10 - UNDEFINED (variável não inicializada)

//EX 11 - NEVER (Não podemos atribuir valor a esse tipo/ Retorno de função que gera erro)
function erro(mensagem: string): never {
    throw new Error(mensagem);   
}

//console.log(erro('Algo deu erro!'))

function rejectMessage() {
    return erro('Algo deu erro2!');
    
}

type Usuario = "admin" | "aluno";
function verificar(usuario: Usuario) {
    switch (usuario) {
        case "admin":
            console.log("Administrador");
            break;

        case "aluno":
            console.log("Aluno");
            break;

        default:
            const erro: never = usuario;
    }
};

//EX 12 - Tipo Object (representa os valores que não são tipo primitivos)
/* */
const pessoaObjeto = {
    nomeO: 'Maize',
    idadeO: 15,
    alturaO: 180
}

console.log(pessoaObjeto);

    //Objeto como parâmetro de função
    function boasVindas(funcionario: {nome:string}) {
        return `Seja bem-vindas ${funcionario.nome}`;
    }
    console.log(boasVindas({nome: 'Alana'}));

    //Objeto nomeados
    interface Pessoaa {
        nome: string;
        idade: number;
    };
    function frase(pessoa: Pessoaaa) {
        return `Seja bem-vindas ${pessoa.nome}, possui ${pessoa.idade} anos.`;
    }
    console.log(frase({nome: 'Marleneeeeee', idade: 18}));

    //Objeto com type alias
    type Pessoaaa ={
        nome: string;
        idade: number;
    }


    //Extensões (herenças)
    interface Mae{
        nome: string;
    }
    interface Pai{
        sobrenome: string;
    }
    interface Filha extends Mae, Pai{
        idade: number;
    }
    const filha: Filha = {
        nome: 'Alana',
        sobrenome:'Sales',
        idade: 18
    };
    console.log('Ex de herença ',filha);

    //Interseções
    interface Cachorro{
        tipo: string;
    }
    interface Gato{
        tipo: string;
    }
    type animal = Cachorro & Gato;


    //Generic Objects
    type Usu ={
        nome: string;
        email:string;
    }
    type Adm={
        nome: string;
        email:string;
        adm: true;
    }
    const usu: Usu={
        nome: 'Jose',
        email: 'jose@gmail'
    }
    const adm: Adm={
        nome: 'Jose',
        email: 'jose@gmail',
        adm: true
    }
    /*function acessarSistem(usu: Usu): Usu {
        return usu;
    }*/
    function acessarSistem<T>(usu:T): T{
        return usu;
    }
    console.log(acessarSistem<Usu>(usu));
    console.log(acessarSistem<Adm>(adm));


//EX 13 - Operador ternario
const idadeVotacao: number = 18;
const podeVotar: string = (idadeVotacao >= 18)? 'Voce é elegível': 'Não pode votar, espere ficar mais velho';
console.log(podeVotar);

/*for...of → percorre os valores
  for...in → percorre os índices */


// RECORD
type Perfis = "admin" | "editor" | "visualizador";
type Permissoes = Record<Perfis, boolean>;

const permissoesUsuario: Permissoes = {
  admin: true,
  editor: true,
  visualizador: false
};

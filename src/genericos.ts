// EX 1 - Generics
function identidade<T>(valor: T): T {
    return valor;
}
let texto = identidade<string>("Olá!"); // Tipo inferido: string
let numero = identidade<number>(123); // Tipo inferido: number
console.log(texto);
console.log(numero);




// EX 2 - Generics Constraints (Restrições de Tipo com Generics)
interface Pessoa{
    nome: string;
    idade: number;
}
const pessao:Pessoa={
    nome: 'Maize',
    idade: 15,
}
interface Animal extends Pessoa{
    raça: string;
}
const animal: Animal={
    nome: 'Toto',
    idade: 2,
    raça: 'Pincher',
}

function tamanho<T extends{idade: number}>(arg:T) {
    return `${arg.idade} anos`;
}
console.log(tamanho(pessao));
console.log(tamanho(animal));


        //Generics com keyof//
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
/*1. Combinação de keyof e Generics: K extends keyof T significa que K deve ser uma das chaves de T. Isto permite que a função acesse propriedades de um objeto de forma segura.
2. Retorno de Tipo Preciso: O tipo de retorno é T[K], que é o tipo da propriedade key no objeto obj. Isso oferece uma segurança de tipo ainda maior e reduz a probabilidade de erros. */


//EX 3 - Classes Genéricas
class Box<T> {
  contents: T;

  constructor(contents: T) {
    this.contents = contents;
  }

  getContents(): T {
    return this.contents;
  }
}
const stringBox = new Box<string>("TypeScript");
const numberBox = new Box<number>(100);


//EX 4 - Interface generica
interface RepostaApi<T> {
  sucesso: boolean;
  mensagem: string;
  dados: T;
}

 const respostaTexto: RepostaApi<string> = {
  sucesso: true,
  mensagem: "Operação concluída",
  dados: "Token12345"
};

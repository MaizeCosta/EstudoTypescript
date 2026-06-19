// EX 1 - Generics
function identidade(valor) {
    return valor;
}
let texto = identidade("Olá!"); // Tipo inferido: string
let numero = identidade(123); // Tipo inferido: number
console.log(texto);
console.log(numero);
const pessao = {
    nome: 'Maize',
    idade: 15,
};
const animal = {
    nome: 'Toto',
    idade: 2,
    raça: 'Pincher',
};
function tamanho(arg) {
    return `${arg.idade} anos`;
}
console.log(tamanho(pessao));
console.log(tamanho(animal));
//Generics com keyof//
function getProperty(obj, key) {
    return obj[key];
}
/*1. Combinação de keyof e Generics: K extends keyof T significa que K deve ser uma das chaves de T. Isto permite que a função acesse propriedades de um objeto de forma segura.
2. Retorno de Tipo Preciso: O tipo de retorno é T[K], que é o tipo da propriedade key no objeto obj. Isso oferece uma segurança de tipo ainda maior e reduz a probabilidade de erros. */
//EX 3 - Classes Genéricas
class Box {
    contents;
    constructor(contents) {
        this.contents = contents;
    }
    getContents() {
        return this.contents;
    }
}
const stringBox = new Box("TypeScript");
const numberBox = new Box(100);
const respostaTexto = {
    sucesso: true,
    mensagem: "Operação concluída",
    dados: "Token12345"
};
export {};

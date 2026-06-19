//EX 1 - Intersection Types
/*Combina dois ou mais de um tipo em um só */
interface DadosBancarios{
    conta: number;
    agencia: number;
    banco: string;
}
interface Cliente{
    nome: string;
    email: string;
}
interface DadosPessoaFisica{
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosPessoa: DadosCliente = {
conta: 123,
agencia:  144,
banco: 'brasil',
nome:'Jose',
email: 'jose@gmail.com',
cpf: 12345678998

}
console.log(dadosPessoa);



//EX 2 - Type Guards (Protetores de Tipo)
/*verificar o tipo de dado de uma variável em tempo de execução */

        //TYPEOF//
type identificador = number | string;
function exibirIdentificador(id: identificador){
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
    constructor(public nome: string, public marca: string) { }

}
class Moto {
    constructor(public nome: string, public ano: number) { }
}
function detalhesVeiculs(veiculo:Carro| Moto) {
    if(veiculo instanceof Carro){
        return `O nome do veiculo é ${veiculo.nome} da marca ${veiculo.marca}`;
    } else if (veiculo instanceof Moto) {
        return `O nome do veiculo é ${veiculo.nome} do ano ${veiculo.ano}`;
    }
}
const carro = new Carro('Mustag','Ford');
console.log(detalhesVeiculs(carro));

const moto = new Moto('Ninja', 2024);
console.log(detalhesVeiculs(moto));


        //IN//
interface Funcionario {
  nome: string;
  cargo: string;
};

interface Cliente01 {
  nome: string;
  limiteCredito: number;
};

function exibirInformacoes(pessoa: Funcionario | Cliente01) {
  if ("cargo" in pessoa) {
    return `Funcionário: ${pessoa.nome}, Cargo: ${pessoa.cargo}`;
  } else {
    return`Cliente: ${pessoa.nome}, Limite: ${pessoa.limiteCredito}`;
  }
};
const funcionario: Funcionario={
    nome: 'Marcelo',
    cargo: 'Dev',
};
const cliente01: Cliente01={
    nome:  'Maria',
    limiteCredito: 10,
};

console.log(exibirInformacoes(funcionario));
console.log(exibirInformacoes(cliente01));


//EX 3 - Type Casting (conversão de tipos)
/*uma forma de instruir o compilador a tratar uma variável ou valor como um tipo específico, sobrescrevendo a tipagem anterior */
        // AS //
let nome: unknown = "Texto";
console.log((nome as string).toLowerCase()); //converter para minúsculas

        // <> //
let cpf: unknown = "123.456.789-85";
let tamanho: number = (<string>cpf).length;
console.log(tamanho);



//EX 4 - Conditional Types (Tipos Condicionais)
/*permite que você escolha um tipo ou outro dependendo de uma condição: Condição ? TipoVerdadeiro : TipoFalso */

type FormatoArquivos = 'png' |'jpg'|'gif'|'svg'|'mp4'|'mp3';
type FiltrarArquivoAudio<T> = T extends 'mp4'| 'mp3'?T:never;
type Arquivo = FiltrarArquivoAudio<FormatoArquivos>;

const arquivoAudio: FormatoArquivos = 'mp4';
console.log(arquivoAudio);



//EX 5 - MappedTypes (Tipos Mapeados) -video 79

// Ex 6 - Satisfies Operator
/*permite verificar se uma expressão está em conformidade com um tipo específico */
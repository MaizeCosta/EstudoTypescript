//EX 1 - CLASSES
/*Use o construtor sempre que sua classe precisar receber dados obrigatórios ao ser instanciada */
class Fruta {
    nome;
    quantidade;
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    inventario() {
        return `${this.nome} possui ${this.quantidade} quantidades!`;
    }
}
const fruta = new Fruta('Uva', 10);
console.log(fruta.inventario());
// EX 2 - MODIFIICADORES DE ACESSO
//PUBLIC //
class Estudante {
    nome;
    serie;
    constructor(nome, serie) {
        this.nome = nome;
        this.serie = serie;
    }
}
const estudante = new Estudante('José', 8);
console.log(`${estudante.nome} esta na ${estudante.serie} serie! `);
//PRIVATE //
class Estudante2 {
    nome;
    serie;
    idade;
    constructor(nome, serie, idade) {
        this.nome = nome;
        this.serie = serie;
        this.idade = idade;
    }
    dadosEstudante2() {
        return `Nome do aluno: ${this.nome}, Serie: ${this.serie}, Idade: ${this.idade} anos.`;
    }
}
const estudante2 = new Estudante2('Maria', 5, 7);
console.log(estudante2.dadosEstudante2());
//PROTECTED //
class Animal {
    cod;
    nome;
    constructor(cod, nome) {
        this.cod = cod;
        this.nome = nome;
    }
}
class Mamifero extends Animal {
    idade;
    constructor(cod, nome, idade) {
        super(cod, nome);
        this.idade = idade;
    }
    retornarDados() {
        return `${this.cod}: ${this.nome} possui ${this.idade} anos`;
    }
}
const mamifero = new Mamifero(1, 'Cachorro', 2);
console.log(mamifero.retornarDados());
//EX 3 - MODIFICADORES DE ACESSO: readonly
class Funcionario {
    dadaNascimento;
    constructor(dadaNascimento) {
        this.dadaNascimento = dadaNascimento;
    }
}
const funcionario = new Funcionario(new Date());
console.log(funcionario.dadaNascimento);
class Funcionario2 {
    dadaNascimento;
    constructor(dadaNascimento) {
        this.dadaNascimento = dadaNascimento;
        this.dadaNascimento = dadaNascimento;
    }
}
const funcionario2 = new Funcionario(new Date());
console.log('Segundo forma de fazer', funcionario.dadaNascimento);
//EX 4 - USO DE GETTERS e SETTERS
/*GET (Acessador): usado para ler o valor de uma propriedade. Devem retornar um valor.*/
class Pessoa {
    nome;
    semestre;
    constructor(nome, semestre) {
        this.nome = nome;
        this.semestre = semestre;
    }
    get nomePessoa() {
        return this.nome;
    }
    get semestrePessoa() {
        return this.semestre;
    }
}
const pessoa = new Pessoa('Maize', 2);
console.log(pessoa.nomePessoa);
/*SET (Mutador): usado para definir ou alterar o valor de uma propriedade. Possui parâmetro com o novo valor.*/
class Pessoa2 {
    nome;
    semestre;
    constructor(nome, semestre) {
        this.nome = nome;
        this.semestre = semestre;
    }
    get nomePessoa() {
        return this.nome;
    }
    get semestrePessoa() {
        return this.semestre;
    }
    set nomePessoa(setNome) {
        this.nome = setNome;
    }
    set semestrePessoa(setSemestre) {
        this.semestre = setSemestre;
    }
}
const pessoa2 = new Pessoa2('Maize', 2);
console.log(`${pessoa2.nomePessoa} esta no ${pessoa2.semestrePessoa}`);
pessoa2.semestrePessoa = 1;
console.log(`${pessoa2.nomePessoa} agora esta no ${pessoa2.semestrePessoa}`);
//EX 5 - HERANÇA
class Bicho {
    andar(distancia) {
        return `Andou ${distancia} metros`;
    }
}
class Gato extends Bicho {
    som() {
        return 'Miauu';
    }
}
const gato = new Gato();
console.log(gato.som());
console.log(gato.andar(5));
class Cacau {
    quantidade;
    constructor(quantidade) {
        this.quantidade = quantidade;
    }
    bater() {
        return `${this.quantidade} de cacau foi batido`;
    }
}
class Chocolate extends Cacau {
    tipo;
    constructor(quantidade, tipo) {
        super(quantidade);
        this.tipo = tipo;
    }
    retornarTipo() {
        return `${super.bater()} e virou chocolate ${this.tipo}`;
    }
}
const chocolate = new Chocolate(10, 'Branco');
console.log(chocolate.retornarTipo());
//EX 6 - MEMBROS ESTÁTICOS
/*são aqueles que pertencem à própria classe, e não a uma instância específica */
//PROPRIEDADE ESTATICA//
class Trabalhador {
    nome;
    cargo;
    static contratações = 0;
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
        Trabalhador.contratações++;
    }
}
const trabalhador1 = new Trabalhador('Maize', 'dev');
const trabalhador2 = new Trabalhador('João', 'arquiteto');
console.log(Trabalhador.contratações);
//METODO ESTATICO
class Traba2 {
    nome;
    cargo;
    static contratações = 0;
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
        Traba2.contratações++;
    }
    static quantidadeContratacao() {
        return `Total de contartações: ${Traba2.contratações}`;
    }
}
const traba1 = new Traba2('Maize', 'dev');
const traba2 = new Traba2('João', 'arquiteto');
console.log(Traba2.quantidadeContratacao());
//EX 7 -  CLASSES ABSTRATAS
/*Não conseguimos criar uma instancia de uma classe abstratas */
class SAP {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    get retornaNome() {
        return this.nome;
    }
    get contraCheque() {
        return `${this.nome} - salario: ${this.retornaSalario()}`;
    }
}
class CLT extends SAP {
    salario;
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    retornaSalario() {
        return this.salario;
    }
}
class PJ extends SAP {
    valorHora;
    horaTrabalhada;
    constructor(nome, valorHora, horaTrabalhada) {
        super(nome);
        this.valorHora = valorHora;
        this.horaTrabalhada = horaTrabalhada;
    }
    retornaSalario() {
        return this.valorHora * this.horaTrabalhada;
    }
}
const clt = new CLT('Maria', 1000);
const pj = new PJ('Jose', 100, 30);
console.log(clt.contraCheque, '\n', clt.retornaSalario());
console.log(pj.contraCheque, '\n', pj.retornaSalario());
export {};

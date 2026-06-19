//EX 1 - CLASSES
/*Use o construtor sempre que sua classe precisar receber dados obrigatórios ao ser instanciada */
class Fruta {
    nome: string;
    quantidade: number;

    constructor(nome: string, quantidade: number) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    inventario(): string{
        return `${this.nome} possui ${this.quantidade} quantidades!`;
    }
}

const fruta = new Fruta('Uva', 10);
console.log(fruta.inventario());


// EX 2 - MODIFIICADORES DE ACESSO
        //PUBLIC //
class Estudante {
    nome:string;
    serie: number;

    constructor(nome: string, serie: number) {
        this.nome = nome;
        this.serie = serie;
    }
}

const estudante = new Estudante('José',8);
console.log(`${estudante.nome} esta na ${estudante.serie} serie! `);


        //PRIVATE //
class Estudante2 {
    nome: string;
    serie: number;
    private idade: number;

    constructor(nome: string, serie: number, idade: number) {
        this.nome = nome;
        this.serie = serie;
        this.idade = idade;
    }

    dadosEstudante2(): string{
        return `Nome do aluno: ${this.nome}, Serie: ${this.serie}, Idade: ${this.idade} anos.`;
    }
}
const estudante2 = new Estudante2('Maria', 5, 7);
console.log(estudante2.dadosEstudante2());


        //PROTECTED //
class Animal {
    cod: number;
    protected nome: string;

    constructor(cod: number, nome: string) {
        this.cod = cod;
        this.nome = nome;
    }
}
class Mamifero extends Animal {
    private idade: number;

    constructor(cod: number, nome: string, idade: number) {
        super(cod, nome);
        this.idade = idade;
    }
    retornarDados(): string{
        return `${this.cod}: ${this.nome} possui ${this.idade} anos`!;
    }
}
const mamifero = new Mamifero(1, 'Cachorro', 2);
console.log(mamifero.retornarDados());


//EX 3 - MODIFICADORES DE ACESSO: readonly
class Funcionario {
    readonly dadaNascimento: Date;

    constructor(dadaNascimento: Date) {
        this.dadaNascimento = dadaNascimento;
    }
}
const funcionario = new Funcionario(new Date());
console.log(funcionario.dadaNascimento);



class Funcionario2 {
    constructor(readonly dadaNascimento: Date) {
        this.dadaNascimento = dadaNascimento;
    }
}
const funcionario2 = new Funcionario(new Date());
console.log('Segundo forma de fazer', funcionario.dadaNascimento);


//EX 4 - USO DE GETTERS e SETTERS
/*GET (Acessador): usado para ler o valor de uma propriedade. Devem retornar um valor.*/
class Pessoa {
    private nome: string;
    private semestre: number;

    constructor(nome: string, semestre: number) {
        this.nome = nome;
        this.semestre = semestre;
    }

    public get nomePessoa(): string{
        return this.nome;
    }
    public get semestrePessoa(): number{
        return this.semestre;
    }
}
const pessoa = new Pessoa('Maize',2);
console.log(pessoa.nomePessoa);


/*SET (Mutador): usado para definir ou alterar o valor de uma propriedade. Possui parâmetro com o novo valor.*/
class Pessoa2 {
    private nome: string;
    private semestre: number;

    constructor(nome: string, semestre: number) {
        this.nome = nome;
        this.semestre = semestre;
    }

    public get nomePessoa(): string{
        return this.nome;
    }
    public get semestrePessoa(): number{
        return this.semestre;
    }
    
    public set nomePessoa(setNome: string){
        this.nome = setNome;
    }
    public set semestrePessoa(setSemestre: number){
        this.semestre = setSemestre;
    }
}
const pessoa2 = new Pessoa2('Maize',2);
console.log(`${pessoa2.nomePessoa} esta no ${pessoa2.semestrePessoa}`);
pessoa2.semestrePessoa = 1;
console.log(`${pessoa2.nomePessoa} agora esta no ${pessoa2.semestrePessoa}`);


//EX 5 - HERANÇA
class Bicho {
    andar(distancia: number): string{
        return `Andou ${distancia} metros`;
    }
}
class Gato extends Bicho{
    som(): string{
        return 'Miauu';
    }
}
const gato = new Gato();
console.log(gato.som());
console.log(gato.andar(5));



class Cacau {
    private quantidade: number;

    constructor(quantidade: number) {
        this.quantidade = quantidade;
    }

    bater():string{
        return `${this.quantidade} de cacau foi batido`;
    }
}
class Chocolate extends Cacau {
    private tipo: string;

    constructor(quantidade: number, tipo: string) {
        super(quantidade)

        this.tipo = tipo;
    }
    retornarTipo(): string{
        return `${super.bater()} e virou chocolate ${this.tipo}`;
    }
}
const chocolate = new Chocolate(10, 'Branco');
console.log(chocolate.retornarTipo());



//EX 6 - MEMBROS ESTÁTICOS
/*são aqueles que pertencem à própria classe, e não a uma instância específica */

        //PROPRIEDADE ESTATICA//
class Trabalhador {
    static contratações: number = 0;
    constructor(private nome: string, private cargo: string) {
        Trabalhador.contratações ++;
    }
}
const trabalhador1 = new Trabalhador('Maize', 'dev');
const trabalhador2 = new Trabalhador('João', 'arquiteto');
console.log(Trabalhador.contratações);

        //METODO ESTATICO
class Traba2 {
    static contratações: number = 0;
    constructor(private nome: string, private cargo: string) {
        Traba2.contratações ++;
    }
    public static quantidadeContratacao(): string{
        return `Total de contartações: ${Traba2.contratações}`;
    }
}
const traba1 = new Traba2('Maize', 'dev');
const traba2 = new Traba2('João', 'arquiteto');
console.log(Traba2.quantidadeContratacao());


//EX 7 -  CLASSES ABSTRATAS
/*Não conseguimos criar uma instancia de uma classe abstratas */
abstract class SAP {
    constructor(private nome: string) { }

    abstract retornaSalario(): number;

    public get retornaNome(): string{
        return this.nome;
    }
    public get contraCheque(){
        return `${this.nome} - salario: ${this.retornaSalario()}`;
    }
}
class CLT extends SAP {
    constructor(nome: string, private salario: number) {
        super(nome);
    }
    retornaSalario(): number {
        return this.salario;
    }
}
class PJ extends SAP {
    constructor(nome: string, private valorHora: number, private horaTrabalhada: number) {
        super(nome);
    }
    retornaSalario(): number {
        return this.valorHora * this.horaTrabalhada;
    }
}
const clt = new CLT('Maria',1000)
const pj = new PJ('Jose',100, 30)
console.log(clt.contraCheque, '\n', clt.retornaSalario());
console.log(pj.contraCheque, '\n', pj.retornaSalario());


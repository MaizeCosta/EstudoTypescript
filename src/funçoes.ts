// Função Declarada (Function Declaration)
function somar(a: number, b: number): number {
  return a + b;
}

function hora(): string {
    const hora = new Date().toLocaleTimeString();
    return hora;
}

console.log(hora());


//Expressão de Função (Function Expression)
/*A função é armazenada dentro de uma variável. */
const saudar = function (men:string){
    return men;
}
console.log(saudar('olá'));


//Arrow Function Expression (Função de Seta)
const saudar2 = (x:number ) =>{
    return x;
}


//Optional Parameters
function informaPessoa(id: number, nome: string, email?: string) {
        console.log('Id: ', id, 'nome: ', nome);

    if(email != undefined) {
        console.log('Email: ', email);
    }
}
informaPessoa(1, 'Maria')
informaPessoa(2, 'João', 'joao@gmail.com')


// Default Parameters (Parâmetros padrão)
    /*permitem definir um valor padrão para um parâmetro de função caso nenhum argumento seja passado ou caso o valor passado seja undefined */
function saldacao(nome: string, mensagem: string ='Olá') {
    return `${mensagem}, ${nome}!`
}
console.log(saldacao('Maize'));
console.log(saldacao('Maize', 'Tudo bem?'));


//Rest Parameters (...)
    /*permitem que uma função receba um número ilimitado de argumentos, agrupando-os em um array */
function somarNumero(...numeros: number[]) {
    let total =0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumero(2,2,1,1,2,2))

function somarForOf(...numeros: number[]) {
    let total: number = 0;
    for (const numero of numeros) {
        total += numero;
    }
    return total;
}
console.log('For Of', somarForOf(1,2,3,4,5,6,7,8,9));
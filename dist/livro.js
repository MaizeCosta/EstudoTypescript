;
let biblioteca = [];
function cadastrarLivro(t, p, f, g) {
    let livro = {
        titulo: t,
        paginas: p,
        foiLido: f,
        genero: g
    };
    biblioteca.push(livro);
}
function pegarTitulo(livro) {
    return `Nome do livro: ${biblioteca[livro]?.titulo}`;
}
function ehLongo(livro) {
    let livroEncontrado = biblioteca[livro];
    if (livroEncontrado) {
        if (livroEncontrado.paginas > 300) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return `Não tem esse livro`;
    }
}
/*
function ehLongoN(livro: number): boolean { //TIRAR DUVIDA DO undefined
    
    if(biblioteca[livro].paginas > 300){
        return true;
    } else{
        return false;
    }
}
*/
function contarLidos(biblioteca) {
    let totalLido = 0;
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i]?.foiLido) {
            totalLido = totalLido + 1;
        }
    }
    return `Total de livros lidos: ${totalLido}`;
}
/*function naoLidosComF(biblioteca: Livro[]) {

    let naoLido: string[] = [];
    for (let i = 0; i < biblioteca.length; i++) {
        if(!biblioteca[i]?.foiLido){
            naoLido.push(biblioteca[i]?.titulo);
        }
    }
    return `Livros não lido: ${naoLido} `;
}*/
function naoLidosComFor(biblioteca) {
    let naoLido = [];
    for (let i = 0; i < biblioteca.length; i++) {
        let livro = biblioteca[i];
        if (livro && !livro.foiLido) {
            naoLido.push(livro.titulo);
        }
    }
    return `Livros não lido: ${naoLido} `;
}
function naoLidos(biblioteca) {
    let naoLido = biblioteca.filter(livro => !livro.foiLido); //TIRAR DUVIDA: DE COMO SÓ GUARDAR O NOME DO TITULO
    return naoLido;
}
var Genero;
(function (Genero) {
    Genero["Fic\u00E7ao"] = "Fic\u00E7\u00E3o";
    Genero["Romance"] = "Romance";
    Genero["Tecnico"] = "T\u00E9cnico";
})(Genero || (Genero = {}));
cadastrarLivro('O magico de Oz', 300, true, Genero.Ficçao);
cadastrarLivro('Entre dois mundos', 300, false, Genero.Ficçao);
cadastrarLivro('Do mil ao milhão', 400, true, Genero.Tecnico);
let total = biblioteca.length;
//console.log(total);
//console.log(biblioteca[0]?.titulo);
//console.log(pegarTitulo(0));
console.log(ehLongo(1));
console.log(ehLongo(5));
console.log(ehLongo(2));
export {};
/*console.log(contarLidos(biblioteca));
console.log(naoLidosComFor(biblioteca));
console.log(naoLidos(biblioteca));*/ 

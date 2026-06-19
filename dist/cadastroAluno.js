;
let listaAluno = [];
function cadastrarAluno(nome, idade, serie) {
    let novoAluno = {
        nome: nome,
        idade: idade,
        serie: serie
    };
    listaAluno.push(novoAluno);
    console.log(`Cadastrado com sucesso`);
}
function listarAlunos(listaAluno) {
    for (let i = 0; i < listaAluno.length; i++) {
        console.log(`${listaAluno[i]?.nome} possui ${listaAluno[i]?.idade} anos e esta na ${listaAluno[i]?.serie} serie`);
    }
}
function buscarAluno(nome, listaAluno) {
    let encontrado = false;
    for (let i = 0; i < listaAluno.length; i++) {
        if (nome == listaAluno[i]?.nome) {
            console.log(listaAluno[i]);
            encontrado = true;
        }
    }
    if (encontrado == false) {
        console.log('Não encontrado');
    }
}
cadastrarAluno('davi', 8, 9);
cadastrarAluno('Marcos', 12, 7);
listarAlunos(listaAluno);
buscarAluno('davi', listaAluno);
buscarAluno('Maize', listaAluno);
export {};

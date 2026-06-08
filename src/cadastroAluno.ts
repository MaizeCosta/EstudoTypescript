interface Aluno{
    nome: string;
    idade: number;
    serie: number;
};

let listaAluno: Aluno[] = [];

function cadastrarAluno(nome:string, idade:number, serie:number){
    let novoAluno: Aluno = {
    nome: nome,
    idade: idade,
    serie: serie
};
    listaAluno.push(novoAluno);
    console.log(`Cadastrado com sucesso`)
}

function listarAlunos(listaAluno:Aluno[]) {
    for (let i = 0; i < listaAluno.length; i++) {
        console.log(`${listaAluno[i]?.nome} possui ${listaAluno[i]?.idade} anos e esta na ${listaAluno[i]?.serie} serie`);
    }
}

function buscarAluno(nome: string, listaAluno:Aluno[]) {
    let encontrado: boolean = false
    for (let i = 0; i < listaAluno.length; i++) {
        if(nome == listaAluno[i]?.nome){
            console.log(listaAluno[i]);
            encontrado = true;
        }         
    }
    if(encontrado == false){
        console.log('Não encontrado');
    }
}

cadastrarAluno('davi',8, 9);
cadastrarAluno('Marcos',12, 7);
listarAlunos(listaAluno);
buscarAluno('davi',listaAluno );
buscarAluno('Maize',listaAluno );


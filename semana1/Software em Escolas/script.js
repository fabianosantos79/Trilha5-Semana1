// let aluno1 = "Fabiano";
// let aluno2 = "Viviane";
// let aluno3 = "Marcinho";
// let aluno4 = "Fernando";
// let aluno5 = "Isabela";

// let notaAluno1 = parseInt(prompt("Insira a nota do aluno " + aluno1));
// let notaAluno2 = parseInt(prompt("Insira a nota do aluno " + aluno2));
// let notaAluno3 = parseInt(prompt("Insira a nota do aluno " + aluno3));
// let notaAluno4 = parseInt(prompt("Insira a nota do aluno " + aluno4));
// let notaAluno5 = parseInt(prompt("Insira a nota do aluno " + aluno5));

// let mediaNotas = (notaAluno1 + notaAluno2 + notaAluno3 + notaAluno4 + notaAluno5) / 5;

// alert("A media da turma é: " + Math.round(mediaNotas))





// let nota1Aluno1 = parseInt(prompt("Digite a primeira nota do aluno " + aluno1));
// let nota2Aluno1 = parseInt(prompt("Digite a segunda nota do aluno " + aluno1));
// let mediaAluno1 = (nota1Aluno1 + nota2Aluno1) / 2;

// let nota1Aluno2 = parseInt(prompt("Digite a primeira nota do aluno " + aluno2));
// let nota2Aluno2 = parseInt(prompt("Digite a segunda nota do aluno " + aluno2));
// let mediaAluno2 = (nota1Aluno2 + nota2Aluno2) / 2;

// let nota1Aluno3 = parseInt(prompt("Digite a primeira nota do aluno " + aluno3));
// let nota2Aluno3 = parseInt(prompt("Digite a segunda nota do aluno " + aluno3));
// let mediaAluno3 = (nota1Aluno3 + nota2Aluno3) / 2;

// let nota1Aluno4 = parseInt(prompt("Digite a primeira nota do aluno " + aluno4));
// let nota2Aluno4 = parseInt(prompt("Digite a segunda nota do aluno " + aluno4));
// let mediaAluno4 = (nota1Aluno4 + nota2Aluno4) / 2;

// let nota1Aluno5 = parseInt(prompt("Digite a primeira nota do aluno " + aluno5));
// let nota2Aluno5 = parseInt(prompt("Digite a segunda nota do aluno " + aluno5));
// let mediaAluno5 = (nota1Aluno5 + nota2Aluno5) / 2;

// if(mediaAluno1 < 7){

// }

// prompt("Digite SAIR")

// Exercício 1
let notas = [];
let nota;
let total = 0;

while (nota !== "SAIR") {
    nota = prompt("Digite o valor da nota");
    notas.push(parseInt(nota))
}

for (let i = 0; i < notas.length - 1; i++) {
    total = total + notas[i];
}

alert("A media dos alunos é: " + total / (notas.length - 1));


//Exercício 2
let disciplina = "";
let nomeAluno = "";
let nota1Aluno = 0;
let nota2Aluno = 0;
let mediaAluno = 0;


while (disciplina !== "SAIR") {
    disciplina = prompt("Digite o nome da disciplina ou SAIR para encerrar");
    nomeAluno = prompt("Digite o nome do aluno");
    nota1Aluno = parseInt(prompt("Digite a primeira nota do aluno "));
    nota2Aluno = parseInt(prompt("Digite a segunda nota do aluno "));
    mediaAluno = (nota1Aluno + nota2Aluno) / 2;


    if (mediaAluno < 7) {
        document.write("Estudante " + nomeAluno + " reprovado(a) na disciplina " + disciplina + " sua nota média no bimestre ficou em " + mediaAluno + "<br>")
    }


}


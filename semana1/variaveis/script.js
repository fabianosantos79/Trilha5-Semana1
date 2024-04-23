let nome = "Fabiano";
let telefone = "11 96480-5636";
let temConvenio = true;
let profissao = "Analista de Sistemas";
let salario = 4000;


document.write(nome + " é um " + profissao + ", que tem o salário de R$ " + salario.toFixed(2) + " seu telefone para contato é " + telefone + " e seu convênio está com o status: " + (temConvenio === true ? "ativo" : "desativado"))

document.write("<hr>");

let numero1 = 5;
let numero2 = 10;

document.write("Número 1 = " + numero1);
document.write("<br>");
document.write("Número 2 = " + numero2);

document.write("<br>");
document.write("<br>");

numero1 = numero2;
numero2 = numero1
document.write("Número 1 = " + numero1);
document.write("<br>");
document.write("Número 2 = " + numero2);

document.write("<br>");
document.write("<br>");

if (numero1 === numero2) {
    numero1 = null;
    document.write("Número 1 = " + numero1)
}
//LISTAS
let pessoa = ["Fabiano", 44, "293.306.038-82", 1.80, true];

document.write("Nome: " + pessoa[0] + " idade " + pessoa[1] + " anos, CPF " + pessoa[2] + " altira " + pessoa[3] + " ele é " + (pessoa[4] === true ? " maior de idade" : " menor de idade"))

document.write("<hr>");

//EXIBIR 10 LETRAS
let letras = [];

while (letras.length < 10) {
    letras.push(prompt("Digite uma letra"))
}

for (let i = 0; i < letras.length; i++) {
    document.write(letras[i]);
}

document.write("<hr>");

//FUNÇÃO EXIBIR LETRAS
let letrasNovas = [];

function recebeLetra(letra) {
    letrasNovas.push(letra);
}

let contador = 1;
while (contador < 10) {
    let acc = prompt("Digite uma letra")
    recebeLetra(acc)
    contador++;
}

document.write("A primeira letra digitada foi " + letrasNovas[0] + "<br>");
document.write("A quarta letra digitada foi " + letrasNovas[3] + "<br>");
document.write("A quinta letra digitada foi " + letrasNovas[4] + "<br>");
document.write("A última letra digitada foi " + letrasNovas[8] + "<br>");
document.write("O tamanho da lista é " + letrasNovas.length);


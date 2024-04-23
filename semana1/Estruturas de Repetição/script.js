//Impar e Par
for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        document.write("O número " + i + " é par <br>")
    } else {
        document.write("O número " + i + " é impar <br>")
    }
}

document.write("<hr>")

//Multiplos de 3
let numero = 1;
while (numero <= 100) {
    if (numero % 3 === 0) {
        document.write(numero + " ");
    }
    numero++;
}

document.write("<hr>")

//100 a 0 de 2 em 2
for (i = 100; i > 1; i = i - 2) {
    document.write(i + " ");
}

document.write("<hr>")

//Jogo PIM
for (let i = 1; i <= 40; i++) {
    if (i % 4 === 0) {
        document.write(" PIM ");
    } else {
        document.write(i + " ");
    }

}


// 2. O jogo do PIM é um jogo em que o Sílvio Santos pedia para os participantes de seu programa contar de 1 até 40 da seguinte forma:

// "1, 2, 3, PIM, 5, 6, 7, PIM, 9, 10, 11, PIM, 13, 14, 15, PIM, 17, 18, 19, PIM, 21, 22, 23, PIM, 25, 26, 27, PIM, 29, 30, 31, PIM, 33, 34, 35, PIM, 37, 38, 39, PIM!"
// Ou seja, quando o número era múltiplo de 4, o jogador tinha que falar PIM ao invés do número! Crie uma lógica que executa o jogo do PIM corretamente.
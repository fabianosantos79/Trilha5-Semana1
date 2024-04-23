// Uma piscina redonda está sendo construída, e sabe-se que ela tem o raio de 3,5m, e uma altura de 1,6m. O construtor notou um erro no volume de água em litros que o software da empresa está retornando, em torno de 0,06L, e resolveu entrar em contato com a equipe de TI. Construa uma lógica que calcula a quantidade de litros que a piscina suportará e identifique o problema na lógica do software.

// 📝 Para calcular o volume (m³) da piscina com base circular (um cilindro), basta multiplicar a área da base pela altura. ■ 1m³ = 1000L ■ π = 3.14

let diametro = 3.5;
let altura = 1.6;
let volume;

volume = Math.PI * (diametro * diametro) * altura;
document.write("O volume da piscina é " + volume)

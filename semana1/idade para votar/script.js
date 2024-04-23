
let idade = prompt("Digite o valor da idade");

if (idade < 16) {
    document.write("<strong>Não pode votar.</strong> Menor de 16 anos")
} else if (idade >= 16 && idade < 18) {
    document.write("<strong>Voto opcional.</strong> Idade entre 16 e 17 anos")
} else if (idade >= 18 && idade <= 70) {
    document.write("<strong>Voto obrigatório.</strong> Idade entre 18 e 70 anos")
} else {
    document.write("<strong>Voto opcional.</strong> Maior de 70 anos")  
}
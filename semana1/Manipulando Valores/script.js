// 1. Soma da quantidade de clientes
let qtdClientesBH = 23;
let qtdClientesSP = 12;
let qtdClientesBA = 11;
let qtdClientesMS = 10;
let qtdClientesPR = 8;

let faturamentoBH = 2950.00;
let faturamentoSP = 3950.00;
let faturamentoBA = 1329.00;
let faturamentoMS = 2412.00;
let faturamentoPR = 626.00;

let totalClientes = qtdClientesBA + qtdClientesBH + qtdClientesMS + qtdClientesPR + qtdClientesSP;

let totalFaturamento = faturamentoBA + faturamentoBH + faturamentoMS + faturamentoPR + faturamentoSP;

document.write("Total de clientes da Jéssica: " + totalClientes);
document.write("<hr>");



// 2. Faturamento médio por cliente de cada cidade
document.write("Belo Horizonte R$ " + Math.round(faturamentoBH / qtdClientesBH).toFixed(2) + "<br>");
document.write("São Paulo R$ " + Math.round(faturamentoSP / qtdClientesSP).toFixed(2) + "<br>");
document.write("Salvador R$ " + Math.round(faturamentoBA / qtdClientesBA).toFixed(2) + "<br>");
document.write("Campo Grande R$ " + Math.round(faturamentoMS / qtdClientesMS).toFixed(2) + "<br>");
document.write("Curitiba R$ " + Math.round(faturamentoPR / qtdClientesPR).toFixed(2) + "<br>");
document.write("<hr>");



// 3. Calcule a média de faturamento de todos os clientes dessas cinco cidades
let mediaTotal = totalFaturamento / totalClientes;

document.write("A média total de faturamento de todos os clientes das cidades é R$ " + Math.round(mediaTotal).toFixed(2) + "<br>");
document.write("<hr>");



// 4. Sabendo que Jéssica oferece frete grátis para seus clientes e possui uma parceria com uma transportadora, considere as seguintes informações sobre os custos com frete que ela possui:

// Frete fixo para o estado de São Paulo = R$ 9,00 por produto vendido
// Frete para os demais estados do Brasil = R$ 14,00 por produto vendido
// O custo de produção dos seus produtos representam 20% do valor faturado (descontando o valor do envio)
// Com base nessas informações, ela quer automatizar o cálculo de seu lucro por cidade. Crie as lógicas de cálculos que serão implementadas no programa para preencher a coluna lucro. Utilize console.log() para fazer os testes e lembre-se de utilizar variáveis para armazenar valores.

let freteSP = 9;
let freteOutras = 14;

let custosBH = faturamentoBH - (qtdClientesBH * freteOutras);
let descontosBH = (custosBH / 100) * 20;
let lucroBH = faturamentoBH - descontosBH;

let custosSP = faturamentoSP - (qtdClientesSP * freteSP);
let descontosSP = (custosSP / 100) * 20;
let lucroSP = faturamentoSP - descontosSP;

let custosBA = faturamentoBA - (qtdClientesBA * freteOutras);
let descontosBA = (custosBA / 100) * 20;
let lucroBA = faturamentoBA - descontosBA;

let custosMS = faturamentoMS - (qtdClientesMS * freteOutras);
let descontosMS = (custosMS / 100) * 20;
let lucroMS = faturamentoMS - descontosMS;

let custosPR = faturamentoPR - (qtdClientesPR * freteOutras);
let descontosPR = (custosPR / 100) * 20;
let lucroPR = faturamentoPR - descontosPR;


document.write("<br>");
document.write("Lucro Belo Horizonte R$ " + lucroBH.toFixed(2) + "<br>");
document.write("Lucro São Paulo R$ " + lucroSP.toFixed(2) + "<br>");
document.write("Lucro Salvador R$ " + lucroBA.toFixed(2) + "<br>");
document.write("Lucro Campo Grande R$ " + lucroMS.toFixed(2) + "<br>");
document.write("Lucro Curitiba R$ " + lucroPR.toFixed(2) + "<br>");
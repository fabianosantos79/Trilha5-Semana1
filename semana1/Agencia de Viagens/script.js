function conversorMoeda(destino, valorPassagens, diarias, guia) {
    if (destino === "Nova Zelândia") {
        valorPassagens = 13996 * 3.25;
        diarias = 79.15 / 3.25;
        guia = 200 / 3.25;
        return "Passagens aéreas = NZD$ " + valorPassagens.toFixed(2) + " - Diárias no hotel = R$ " + diarias.toFixed(2) + " Guia local = R$ " + guia.toFixed(2);
    }
    else if (destino === "Tailândia") {
        valorPassagens = 9160 / 0.15;
        diarias = 590 / 0.15;
        guia = 235 / 0.15;
        return "Passagens aéreas = THB$ " + valorPassagens.toFixed(2) + " - Diárias no hotel = R$ " + diarias.toFixed(2) + " Guia local = R$ " + guia.toFixed(2);
    }
    else if (destino === "Costa Rica") {
        valorPassagens = 5119 / 0.0089;
        diarias = 2300 / 0.0089;
        guia = 3150 / 0.0089;
        return "Passagens aéreas = CRC$ " + valorPassagens.toFixed(2) + " - Diárias no hotel = R$ " + diarias.toFixed(2) + " Guia local = R$ " + guia.toFixed(2);
    }
}


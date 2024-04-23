let mensagem = prompt('Senha incorreta. Seu cartão foi bloqueado. Se deseja ir a uma agência, digite “A” ou se deseja desbloquear com sua chave de segurança, digite “D');

if (mensagem === "A") {
    document.write("Olá Tainá, será um prazer atendê-la em uma agência!")
} else if (mensagem === "D") {
    let chave = prompt("Digite a chave de segurança que foi enviada para seu e-mail cadastrado.")

    if (chave === "9999") {
        alert("Redefina sua senha")
    } else {
        alert("Você deverá ir a uma agência");
    }
}

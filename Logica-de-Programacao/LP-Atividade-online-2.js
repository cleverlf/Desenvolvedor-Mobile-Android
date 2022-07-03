var listaParticipantes = [];

do {
    var cadastroParticipante = prompt("Informe seu nome para cadastro:");
    var dataEvento = new Date(Date.parse(prompt("Informe a data(mm-dd-yyyy) do evento:")));
    var dataAtual = new Date();
    if (dataEvento > dataAtual) {

        var idadeParticipante = prompt("Informe sua idade:");
        if (idadeParticipante > 18) {

            if (listaParticipantes.length < 2) {

                listaParticipantes.push(cadastroParticipante);
                alert("Cadastro realizado!");

            } else {
                alert("Cadastro não será permitido por  ter excedido o limite.");
            }
        } else {
            alert("O cadastro não é permitido pela idade.")
        }
    } else {
        alert("O cadastro não será permitido por data inválida.");
    }

    alert("Lista: " + listaParticipantes);

} while (listaParticipantes.length < 2); 
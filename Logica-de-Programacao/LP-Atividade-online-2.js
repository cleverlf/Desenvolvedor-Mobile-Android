var listaParticipantes = [];
var qtdParticipantes = 1;

do {
    var cadastroParticipante = prompt("Informe seu nome para cadastro:");
    var dataEvento = new Date(Date.parse(prompt("Informe a data(mm-dd-yyyy) do evento:")));
    var dataAtual = new Date();
    if (dataEvento > dataAtual) {
        alert("Cadastro permitido");
        var idadeParticipante = prompt("Informe sua idade:");
        if (idadeParticipante > 18) {
            alert("Cadastro permitido");

            if (listaParticipantes.length < 100) {
                alert("Cadastro permitido");
                
                listaParticipantes.push(cadastroParticipante);
                
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
  qtdParticipantes++;
} while (qtdParticipantes < 100); 
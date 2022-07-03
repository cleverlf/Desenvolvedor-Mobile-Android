// variável, seu valor pode ser alterado no decorrer  do programa  
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado 
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);
//Em outras linguagens, portanto, você encontrará    algo semelhante a:  
String: nomeEstudante = "Helena";

//com o for:
let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);
for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
    const alunoCorrente = listaDeEstudantes[indice];
    console.log(alunoCorrente);
}


//Com o do:  
//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
let inicio = 0;

do {
    console.log(listaDeEstudantes[inicio]);
    inicio++;

} while (inicio < quantidadeDeEstudantes);

//Com o while:  
while (inicio < quantidadeDeEstudantes) {
    console.log(listaDeEstudantes[inicio]);
    inicio++;
}
//Com o for:
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
}

//
//let listaDeEstudantes = ["Helena", "Chico", "Mário"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
listaDeEstudantes.push("José");  //Adicionar a lista
console.log(listaDeEstudantes);


if (quantidadeDeEstudantes < 5) {
    listaDeEstudantes.push("José");
}
console.log(listaDeEstudantes);

//let listaDeEstudantes = ["Helena", "Chico", "Mário", "José", "Maria"];
//let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
    listaDeEstudantes.push("João");
    console.log(listaDeEstudantes);
} else {
    console.log("Não é  possível inserir mais alunos nessa turma");
}
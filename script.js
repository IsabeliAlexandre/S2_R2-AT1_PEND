let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    let mensagemDeTexto = inputTarefa.value;

    if (mensagemDeTexto === "") {
        mensagem.innerText = 'Adicione uma tarefa🤦';
        mensagem.className = 'alert alert-danger'

    } else {
        let lista = document.createElement("li");
        lista.className = "list-group-item";
        lista.innerText = mensagemDeTexto;

        listaTarefas.appendChild(lista);

        mensagem.innerHTML ='Tarefa adicionada!';
        mensagem.className = 'alert alert-success'
    }

});
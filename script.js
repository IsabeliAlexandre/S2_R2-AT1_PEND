let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    let mensagemDeTexto = inputTarefa.value;

    if (mensagemDeTexto === "") {

        mensagem.innerHTML =
        '<div class="alert alert-danger" role="alert">Adicione uma tarefa🤦</div>';

    } else {
        let lista = document.createElement("li");
        lista.className = "list-group-item";
        lista.innerText = mensagemDeTexto;

        listaTarefas.appendChild(lista);

        mensagem.innerHTML =
        '<div class="alert alert-success" role="alert">Tarefa adicionada!</div>';
    }

});
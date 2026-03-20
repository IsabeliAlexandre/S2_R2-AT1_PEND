let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () =>  {

    let mensagemDeTexto = inputTarefa.value;
    if (mensagemDeTexto == '') {

        mensagem.innerHTML =
        '<div class="alert alert-danger">Adicione uma tarefa🤦</div>'; // classe bootstrap para mensagem de problema

    } else {

        let lista = document.createElement("li");
        lista.className = "list-group-item d-flex justify-content-between align-items-center"; 
        lista.innerText = mensagemDeTexto;

        let btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover Tarefa";
        btnRemover.className = "btn btn-danger"; // classe de botão vermleho 

        btnRemover.addEventListener("click", ()=> {
            lista.remove()
        }),

        lista.appendChild(btnRemover);
        listaTarefas.appendChild(lista);
        inputTarefa.value = "";

        mensagem.innerHTML = '<div class="alert alert-success">Tarefa adicionada!</div>'; // classe bootstrap para mensagem de sucesso
    }

});
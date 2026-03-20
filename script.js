let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () =>  {

    let mensagemDeTexto = inputTarefa.value;
    if (mensagemDeTexto == '') {

        mensagem.innerText = 'Adicione uma tarefa🤦' 
        mensagem.className = 'alert alert-danger'// classe bootstrap para mensagem de problema

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

        mensagem.innerText = 'Tarefa adicionada!'; 
        mensagem.className = 'alert alert-success'// classe bootstrap para mensagem de sucesso
    }

});
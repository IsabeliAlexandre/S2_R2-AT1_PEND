let inputTarefa = document.getElementById("inputTarefa");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");

btnAdicionar.addEventListener("click", () => {

    let mensagemDeTexto = inputTarefa.value;

    if (mensagemDeTexto === "") {
        mensagem.innerText= 'Digite uma tarefa 🤦'
        mensagem.className= 'alert alert-danger' //classe para mensagem de problema
    
    } else {

        let lista = document.createElement("li");
        lista.className = "list-group-item";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
                lista.style.textDecoration = "line-through";
            } else {
                lista.style.textDecoration = "none";
            }
        });

        lista.appendChild(checkbox);

        let texto = document.createTextNode(mensagemDeTexto);
        lista.appendChild(texto);

        let btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover tarefa";
        btnRemover.className = "btn btn-danger"; //classe de botão vermelho

        btnRemover.addEventListener("click", () =>  {
            lista.remove();
        });

        lista.appendChild(btnRemover);
        listaTarefas.appendChild(lista);
        mensagem.innerText = 'Tarefa adicionada!';
        mensagem.className = 'alert alert-success' //classe de mensagem de sucesso
    }
});
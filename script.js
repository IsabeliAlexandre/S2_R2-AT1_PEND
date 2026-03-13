let input = document.getElementById("inputTarefa");
let botao = document.getElementById("btnAdicionar");
let lista = document.getElementById("listaTarefas");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {

    let texto = input.value;

    if (texto === "") {

        mensagem.innerHTML =
        '<div class="alert alert-danger" role="alert">Adicione uma tarefa🤦‍♀️</div>';

    } else {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = texto;

        lista.appendChild(li);
        input.value = "";

        mensagem.innerHTML =
        '<div class="alert alert-success" role="alert">Tarefa adicionada!</div>';
    }

});
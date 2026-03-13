let itemUsuario = document.getElementById("itemUsuario");
let botaoAdicionar = document.getElementById("botaoAdicionar");

let itensLista = document.querySelector(".Lista");

botaoAdicionar.addEventListener("click", () => {

    let itensDoUsuario = itemUsuario.value;

    if (itensDoUsuario) {

        let itensNovos = document.createElement("li");
        itensNovos.innerText = itensDoUsuario;

        itensLista.appendChild(itensNovos);

    }

});
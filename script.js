let formularioLogin = document.getElementById("formularioLogin");
let botaoEntrar = document.querySelector("#botaoEntrar");
let nomeUsuario = document.querySelector("#nomeUsuario")
let mensagem = document.getElementById("mensagem")


botaoEntrar.addEventListener("click", () => {

    nomeUsuario = nomeUsuario.value

    if (nomeUsuario) {

        mensagem.innerText = `Olá ${nomeUsuario}. Seja bem vinda(o)`


    }

})
//* VARIAVEIS UTILIZADAS
const lista = document.getElementById("lista")
const lista_btn = [...document.getElementsByClassName("botoes")]
const lista_icones = [...document.getElementsByClassName("icones")]
let campo_add = document.getElementById("campo-add")
let tarefas_armazenadas = [...document.querySelectorAll(".tarefas")]
let tela_principal = document.getElementById("principal")
let tema_lista = document.getElementById("tela-escuro")
let btn_adicionar = document.getElementById("btn-add")
let btn_deletar = document.getElementById("btn-del")
let btn_tema = document.getElementById("btn-tema")
let btn_alterar = document.getElementById("btn-alt")
let btn_icone = document.getElementById("btn-icone")

//* ADICIONAR TAREFAS
btn_adicionar.addEventListener("click", () => {
    const novo_elemento = document.createElement("li")
    novo_elemento.setAttribute("class", "tarefas")
    novo_elemento.innerHTML = campo_add.value
    if (campo_add.value == "") {
        alert("O campo não pode ficar vazio!")
    } else {
        lista.appendChild(novo_elemento)
    }
})

//* ALTERAR TAREFA



//* DELETAR TAREFA
//! REVISÃO: Necessário corrigir a questão de adicionar a classe ao evento de click para novos elementos
tarefas_armazenadas.map((elemento) => {
    elemento.addEventListener("click", (selecionado) => {
        const tarefa_sel = selecionado.target
        tarefa_sel.classList.toggle("tar-sel")
    })
})
btn_deletar.addEventListener("click", () => {
    const tarefa_selecionada = [...document.querySelectorAll(".tar-sel")]
    tarefa_selecionada.map((tarefas) => {
        lista.removeChild(tarefas)
    })
})


//* ALTERAR O TEMA
btn_tema.addEventListener("click", () => {
    tela_principal.classList.toggle("tema-escuro")
    tema_lista.classList.toggle("tela-escuro")
    btn_tema.classList.toggle("botoes-claro")
    for (btn of lista_btn) {
        btn.classList.toggle("botoes-escuro")
    }

})

//* ALTERAR ICONE
//! REVISÃO: Descobrir uma forma de alterar mais de uma classe por evento (cada classe em um clique)
btn_icone.addEventListener("click", () => {
    tarefas_armazenadas.map((tarefas) => {
        tarefas.classList.toggle("icone1")
    })
})
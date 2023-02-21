//* VARIAVEIS UTILIZADAS
let tela_principal = document.getElementById("principal")
let tela_tarefa = document.querySelector(".tela-tarefa")
let lista = document.getElementById("lista")
let lista_btn = [...document.getElementsByClassName("botoes")]
let lista_icones = [...document.getElementsByClassName("icones")]
let campo_add = document.getElementById("campo-add")
let tarefas_armazenadas = [...document.getElementsByClassName("tarefas")]
let tema_lista = document.getElementById("tela-escuro")
let btn_adicionar = document.getElementById("btn-add")
let btn_deletar = document.getElementById("btn-del")
let btn_listar = document.getElementById("btn-lst")
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
        tarefas_armazenadas.push(novo_elemento)
        lista.appendChild(novo_elemento)
    }
})

//* ALTERAR TAREFA
btn_alterar.addEventListener("click", () => {
    let alt_tarefa = ""
    let sel_tarefa = [...document.getElementsByClassName("tar-sel")]
    if (sel_tarefa.length == 0) {
        alert("É necessário selecionar uma tarefa primeiro!")
    } else if (sel_tarefa.length > 0) {
        alt_tarefa = prompt("Digite aqui a nova tarefa:")
        if (alt_tarefa == "") {
            alert("Não é possível deixar o campo vazio!")
            return sel_tarefa
        } else if (alt_tarefa == null) {
            alert("Alteração cancelada!")
            return sel_tarefa
        }
        sel_tarefa.map((tarefa) => {
            tarefa.classList.remove("tar-sel")
            let confirmacao = confirm("Tem certeza que deseja realizar a alteração?")
            if (confirmacao == true) {
                alert("Alteração realizada!")
                tarefa.innerHTML = alt_tarefa
            } else if (confirmacao == false) {
                alert("Alteração cancelada!")
                sel_tarefa = sel_tarefa
            } else if (alt_tarefa == "") {
                alert("Não é possível deixar o campo vazio!")
            }
        })
    } else {
        alert("ERRO!")
    }
})


//* DELETAR TAREFA
lista.addEventListener("click", () => {
    tarefas_armazenadas.map((tarefa) => {
        tarefa.addEventListener("click", () => {
            tarefa.classList.toggle("tar-sel")
        })
    })
})
btn_deletar.addEventListener("click", () => {
    const tarefa_selecionada = [...document.querySelectorAll(".tar-sel")]
    tarefa_selecionada.map((tarefas) => {
        lista.removeChild(tarefas)
    })
})


//* LISTAR TAREFAS A-Z
btn_listar.addEventListener("click", () => {
    tarefas_armazenadas.sort()
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
        tarefas.classList.toggle("icone6")
    })
})
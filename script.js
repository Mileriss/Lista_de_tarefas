//* VARIAVEIS UTILIZADAS
let tela_principal = document.getElementById("principal")
let tela_tarefa = document.querySelector(".tela-tarefa")
let lista_btn = [...document.getElementsByClassName("botoes")]
let lista_icones = [...document.getElementsByClassName("icones")]
let tarefas_armazenadas = [...document.getElementsByClassName("tarefas")]



//* ADICIONAR TAREFAS
let btn_adicionar = document.getElementById("btn-add")
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

let campo_add = document.getElementById("campo-add")
campo_add.addEventListener("keydown", (adicionar) => {
    if (adicionar.key == "Enter") {
        const novo_elemento = document.createElement("li")
        novo_elemento.setAttribute("class", "tarefas")
        novo_elemento.innerHTML = campo_add.value
        adicionar.preventDefault()
        if (campo_add.value == "") {
            alert("O campo não pode ficar vazio!")
        } else {
            tarefas_armazenadas.push(novo_elemento)
            lista.appendChild(novo_elemento)
            campo_add.value = ""
        }
    }
})

//* ALTERAR TAREFA
let btn_alterar = document.getElementById("btn-alt")
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
            let conf_alt = confirm("Tem certeza que deseja realizar a alteração?")
            if (conf_alt == true) {
                alert("Alteração realizada!")
                tarefa.innerHTML = alt_tarefa
            } else if (conf_alt == false) {
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
let lista = document.getElementById("lista")
lista.addEventListener("click", () => {
    tarefas_armazenadas.map((tarefa) => {
        tarefa.addEventListener("click", () => {
            tarefa.classList.toggle("tar-sel")
        })
    })
})
let btn_deletar = document.getElementById("btn-del")
btn_deletar.addEventListener("click", () => {
    let del_tarefa = [...document.getElementsByClassName("tar-sel")]
    if (del_tarefa.length == 0) {
        alert("É necessário selecionar uma tarefa primeiro!")
    } else if (del_tarefa.length > 0) {
        const tarefa_selecionada = [...document.querySelectorAll(".tar-sel")]
        tarefa_selecionada.map((tarefas) => {
            let conf_del = confirm("Tem certeza que deseja excluir essa tarefa?")
            if (conf_del == true) {
                alert("Tarefa excluida com sucesso!")
                lista.removeChild(tarefas)
            } else if (conf_del == false) {
                alert("Exclusão cancelada!")
            }
        })
    }
})

//* ALTERAR ICONE
let btn_selecionar = document.getElementById("btn-sel")
let sel_icone = document.getElementById("lst-icone")
btn_selecionar.addEventListener("click", () => {
    if (sel_icone.value == "armenian") {
        lista.classList.toggle("ic1")
    } else if (sel_icone.value == "circle") {
        lista.classList.toggle("ic2")
    } else if (sel_icone.value == "decimal") {
        lista.classList.toggle("ic3")
    } else if (sel_icone.value == "decimal-leading-zero") {
        lista.classList.toggle("ic4")
    } else if (sel_icone.value == "disc") {
        lista.classList.toggle("ic5")
    } else if (sel_icone.value == "georgian") {
        lista.classList.toggle("ic6")
    } else if (sel_icone.value == "lower-alpha") {
        lista.classList.toggle("ic7")
    } else if (sel_icone.value == "lower-greek") {
        lista.classList.toggle("ic8")
    } else if (sel_icone.value == "lower-latin") {
        lista.classList.toggle("ic9")
    } else if (sel_icone.value == "lower-roman") {
        lista.classList.toggle("ic10")
    } else if (sel_icone.value == "square") {
        lista.classList.toggle("ic11")
    } else if (sel_icone.value == "upper-alpha") {
        lista.classList.toggle("ic12")
    } else if (sel_icone.value == "upper-latin") {
        lista.classList.toggle("ic13")
    } else if (sel_icone.value == "upper-roman") {
        lista.classList.toggle("ic14")
    } else {
        alert("Selecione um tipo de icone")
    }

    console.log("Icone do tipo: " + sel_icone.value)
})


//* ALTERAR O TEMA
let btn_tema = document.getElementById("btn-tema")
let tema_lista = document.getElementById("tela-escuro")
btn_tema.addEventListener("click", () => {
    tela_principal.classList.toggle("tema-escuro")
    tema_lista.classList.toggle("tela-escuro")
    btn_tema.classList.toggle("botoes-claro")
    for (btn of lista_btn) {
        btn.classList.toggle("botoes-escuro")
    }
})
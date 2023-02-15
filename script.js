//* ADICIONAR TAREFAS
let add_tarefa = document.getElementById("campo-add")
let btn_adicionar = document.getElementById("btn-add")
const tela_tarefa = document.getElementById("lista")

btn_adicionar.addEventListener("click", ()=>{
    const novo_elemento = document.createElement("li")
    novo_elemento.setAttribute("class", "tarefas")
    novo_elemento.innerHTML = add_tarefa.value
    if(add_tarefa.value == ""){
        alert("O campo não pode ficar vazio!") 
    }else{
        tela_tarefa.appendChild(novo_elemento)
    }
})

//* ALTERAR O TEMA
let btn_tema = document.getElementById("btn-tema")
let bloco_principal = document.getElementById("principal")
let btn_add =  btn_adicionar
let btn_alterar = document.getElementById("btn-alt")
let btn_deletar = document.getElementById("btn-del")
let btn_listar = document.getElementById("btn-lst")
let btn_alterar_icone = document.getElementById("btn-alt-icone")
let tarefas = document.getElementById("tela-escuro")

btn_tema.addEventListener("click", ()=>{
    bloco_principal.classList.toggle("tema-escuro")
    tarefas.classList.toggle("tela-escuro")
    btn_add.classList.toggle("botoes-escuro")
    btn_alterar.classList.toggle("botoes-escuro")
    btn_deletar.classList.toggle("botoes-escuro")
    btn_listar.classList.toggle("botoes-escuro")
    btn_alterar_icone.classList.toggle("botoes-escuro")
    btn_tema.classList.toggle("botoes-claro")
})

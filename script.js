//* ADICIONAR TAREFAS
const tela_tarefa = document.getElementById("lista")
let add_tarefa = document.getElementById("campo-add")
let btn_adicionar = document.getElementById("btn-add")

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

//! REVISÃO: Necessário corrigir a questão de adicionar a classe ao evento de click para novos elementos
//* DELETAR TAREFA
let tarefas_armazenadas = [...document.getElementsByClassName("tarefas")]
tarefas_armazenadas.map((elemento)=>{
    elemento.addEventListener("click", (selecionado)=>{
        const tarefa_sel = selecionado.target
        tarefa_sel.classList.toggle("tar-sel")
    })
})
let btn_del = document.getElementById("btn-del")
btn_del.addEventListener("click", ()=>{
    const tarefa_selecionada = [...document.querySelectorAll(".tar-sel")]
    tarefa_selecionada.map((tarefas)=>{
        tela_tarefa.removeChild(tarefas)
    })
})


//* ALTERAR O TEMA
let bloco_principal = document.getElementById("principal")
let tela_tarefas = document.getElementById("tela-escuro")
let btn_tema = document.getElementById("btn-tema")
const lista_btn = [...document.getElementsByClassName("botoes")]
// const lista_tarefas = [...document.getElementsByClassName("tarefas")]

btn_tema.addEventListener("click", ()=>{
    bloco_principal.classList.toggle("tema-escuro")
    tela_tarefas.classList.toggle("tela-escuro")
    btn_tema.classList.toggle("botoes-claro")
    for(btn of lista_btn){
        btn.classList.toggle("botoes-escuro")
    }

})

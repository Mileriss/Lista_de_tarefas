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

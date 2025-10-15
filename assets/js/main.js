const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefas');

function criaLi (){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);

    limpaTarefa();
    criaBotaoApagar(li);
    salvarTarefas();
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

        limpaTarefa();
    }
})

function limpaTarefa(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Delete';
    botaoApagar.setAttribute('class', 'apagar-tarefa');
    botaoApagar.setAttribute('title', 'Delete this Task');
    li.appendChild(botaoApagar);
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

    limpaTarefa();
});

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar-tarefa')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Delete', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefasA', tarefasJSON);

}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefasA');

    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
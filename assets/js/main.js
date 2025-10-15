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
    }
})

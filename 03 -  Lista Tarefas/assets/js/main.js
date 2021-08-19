const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLista(){
    const lista = document.createElement('li');
    return lista;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
       criaTarefa(inputTarefa.value);
    }     
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); 
}

function criaBtnApagar(lista){
    lista.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar')
    lista.appendChild(btnApagar);
}

function criaTarefa(textoInput) {
    const lista = criaLista();
    lista.innerText = textoInput; 
    tarefas.appendChild(lista);
    limpaInput();  
    criaBtnApagar(lista);
    salvarTarefas(); 
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains("apagar")){
        el.parentElement.remove();
        salvarTarefas(); 
    }
})

function salvarTarefas(){
    const listaTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of listaTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasjSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasjSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const ListaTarefas = JSON.parse(tarefas);
    
    for (let tarefa of ListaTarefas) {
        criaTarefa(tarefa); 
    }
}
adicionaTarefasSalvas();
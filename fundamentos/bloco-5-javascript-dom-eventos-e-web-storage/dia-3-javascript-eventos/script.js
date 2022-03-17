function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        if (day === 24 | day === 31) {
            dayItem.className = 'day holiday';

            getDaysList.appendChild(dayItem);
        } else if (day === 4 | day === 11 | day === 18) {
            dayItem.className = 'day friday';

            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';

            getDaysList.appendChild(dayItem);
        } else {

            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
    };
};
createDaysOfTheMonth();
console.log(document.querySelector('#days'))

function criarBotao(nomeBotao) {
    let localBotao = document.querySelector('.buttons-container')
    let criarBotao = document.createElement('button')

    criarBotao.innerText = nomeBotao
    criarBotao.id = "btn-holiday"
    localBotao.appendChild(criarBotao)
}
criarBotao("Feriados")


function mudarCor() {
    let botao = document.querySelector("#btn-holiday")
    let feriados = document.querySelectorAll(".holiday")
    let corAtual = "rgb(238, 238, 238)"
    let novaCor = "red"

    botao.addEventListener('click', function(){
        for (i = 0; i < feriados.length; i++) {
            if (feriados[i].style.backgroundColor === novaCor) {
                feriados[i].style.backgroundColor = corAtual
            }
            else {
                feriados[i].style.backgroundColor = novaCor
            }
        }

    })
}

mudarCor()

function criarBotaoSexta(nomeBotaoSexta) {
    let localBotaoS = document.querySelector('.buttons-container')
    let criarBotaoS = document.createElement('button')

    criarBotaoS.innerText = nomeBotaoSexta
    criarBotaoS.id = "btn-friday"
    localBotaoS.appendChild(criarBotaoS)
}
criarBotaoSexta("Sexta-Feira")


function mudarSexta(datasSexta) {
    let botaoSexta = document.querySelector("#btn-friday")
    let sextas = document.querySelectorAll(".friday")
    let novoNome = "sextou!"

    botaoSexta.addEventListener('click', function(){
        for (i = 0; i < sextas.length; i++) {
            if (sextas[i].innerText !== novoNome) {
                sextas[i].innerText  = novoNome
            }
            else{
                sextas[i].innerText = datasSexta[i]
            }
        }

    })
}
let diasDeSexta = [4,11,18,25]
mudarSexta(diasDeSexta)

function dayZoom(){
let dia = document.querySelector('#days')
dia.addEventListener('mouseover',function(event){
event.target.style.fontSize = "30px"
event.target.style.fontWeight = "600"
})
}
function dayOutZoom(){
let dia = document.querySelector('#days')
dia.addEventListener('mouseout',function(event){
    event.target.style.fontSize = "20px"
    event.target.style.fontWeight = "200"
})
}
dayZoom()
dayOutZoom()

function tarefa(task){
    let minhasTarefas = document.querySelector('.my-tasks')
    let tarefas = document.createElement('span')
    tarefas.innerText = task
    minhasTarefas.appendChild(tarefas)
}
tarefa("Cozinhar")
    

function corTask(cor){
    let minhasTarefas1 = document.querySelector('.my-tasks')
    let legendaCor = document.createElement('div')
    legendaCor.classList = "task"
    legendaCor.style.backgroundColor = cor
    minhasTarefas1.appendChild(legendaCor)

}
corTask("green")

function selecionarTask(){

    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function(event) {
        if(myTasks.className === 'task'){
            myTasks.classList = 'task selected'
        }
        else{
            myTasks.className = 'task'
        }
console.log(document.querySelector('.task'))

})
}

selecionarTask()


 function clickCor(){
 let tasks = document.querySelector('.task')
 let days1 = document.querySelector('#days')
 let colorTask = tasks.style.backgroundColor

days1.addEventListener('click', function(event){
    
    if (tasks.className === "task selected" && event.target.style.color !== colorTask){
        event.target.style.color = colorTask
    }
    else{
        event.target.style.color = 'rgb(119,119,119)'
    }
 })
}
clickCor()


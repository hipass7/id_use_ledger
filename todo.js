const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj)
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const months = date.getMonth() + 1;
    const day = date.getDate();
    const dating = `${months}월 ${day}일`
    const timing = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes} 사용`
    const currentValue = toDoInput.value;
    const ps = `${currentValue}/ ${dating}/ ${timing}`
    paintToDo(ps);
    toDoInput.value = '';
}
setInterval(handleSubmit, 10000);
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS,);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit)
}

init();
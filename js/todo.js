const toDoForm = document.querySelector(".toDoList-form");
const toDoList = document.querySelector(".toDo-list");
const toDoInput = document.querySelector(".toDoList-form input");
let toDos = [];

function makeTodo(newTodo){
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    list.id = newTodo.id;
    button.innerText = "x";
    button.addEventListener("click", deleteList);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
};

function todoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject ={
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObject);  
    makeTodo(newTodoObject);
    saveTodo();
};
toDoForm.addEventListener("submit", todoSubmit);

function deleteList(event){
    const delList = event.target.parentElement;
    delList.remove();
    toDos = toDos.filter(thisTodo =>thisTodo.id !== parseInt(delList.id));
    saveTodo();
}

function saveTodo(){
    localStorage.setItem("TODO", JSON.stringify(toDos));
};

const storageTodo = localStorage.getItem("TODO");
if(storageTodo !== null){
    const parsedTodos = JSON.parse(storageTodo);
    toDos = parsedTodos;
    parsedTodos.forEach(makeTodo);
}




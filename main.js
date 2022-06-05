const form= document.querySelector("#form");
const text=document.querySelector("#text");
const ust=document.querySelector("#ust");
const todoList= document.querySelector(".list-group");
const alertt=document.querySelector(".alert");
const silbutton=document.querySelector(".sil");
eventListener();

function eventListener(){
    
     
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    todoList.addEventListener("click",deleteTodo);
    silbutton.addEventListener("click",clearAllTodos);
    
}

function clearAllTodos() {
    if (confirm("Tüünü silmek istediğinizden emin misiniz ?")){
        while (todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}

function deleteTodo(e){
    if(e.target.className==="img"){
        e.target.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.textContent);
        showAlert("success","Text başarıyla silindi");
    }
}
function deleteTodoFromStorage(deleteTodo) {
    let todos=getTodosFromStorage();

    todos.forEach(function(todo,index) {
        if(todo===deleteTodo) {
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo){
        console.log("todo");
        addTodoToUI(todo)
    })
}
function addTodo(e){
console.log("asdfasfasf");
    const newText = text.value.trim();
    console.log(newText);
    if(newText===""){
        showAlert("danger","Lütfen bir şey yazın..");
    }
    else{
        addTodoToUI(newText);
        addTodoToStorage(newText);
        
        showAlert("success","Text başarıyla eklendi...");
    }
    
   
    e.preventDefault();
}


function showAlert(type,message) {
    const alert=document.createElement("div");
    alert.className='alert-style type-'+type;
    alert.textContent=message;
    alertt.appendChild(alert);

    //setTimeout

    setTimeout(function() {
        alert.remove();
    },1000);
}
function getTodosFromStorage(){
    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];
    }

    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newText){
    let todoss=getTodosFromStorage();
    todoss.push(newText);
    localStorage.setItem("todos",JSON.stringify(todoss));
 }
function addTodoToUI(newText) {
    
    //list Item oluşturma
    const listItem = document.createElement("li");
    const icon = document.createElement("img");
    listItem.className="list-group-item";
    icon.src="./sil.svg";
    icon.className="img";
    //Text Node Ekleme
    
    listItem.appendChild(document.createTextNode(newText));
    
    
    //Tıdı List Item'ı ekeleme
    
    todoList.appendChild(listItem);
    listItem.appendChild(icon);
    text.value="";
    }
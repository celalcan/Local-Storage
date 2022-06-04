const form= document.querySelector("#form");
const text=document.querySelector("#text");
const ust=document.querySelector("#ust");
const todoList= document.querySelector(".list-group");
const alertt=document.querySelector(".alert");
eventListener();
 
function eventListener(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI)
    /* document.addEventListener("DOMContentLoaded",loadAllTodosToUI); */
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
        showAlert("danger","Lütfen bir todo girin...");
    }
    else{
        addTodoToUI(newText);
        addTodoToStorage(newText);
        
        showAlert("","Todo başarıyla eklendi...");
    }
    
   
    e.preventDefault();
}


function showAlert(type,message) {
    const alert=document.createElement("div");
    alert.className='alert alert-'+type;
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
    
    listItem.className="list-group-item";
    
    //Text Node Ekleme
    
    listItem.appendChild(document.createTextNode(newText));
    
    
    //Tıdı List Item'ı ekeleme
    
    todoList.appendChild(listItem);
    text.value="";
    }
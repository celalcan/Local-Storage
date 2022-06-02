const form= document.querySelector("#form");
const text=document.querySelector("#text");
const ust=document.querySelector("#ust");
eventListener();

function eventListener(){
    form.addEventListener("submit",addTodo);
    /* document.addEventListener("DOMContentLoaded",loadAllTodosToUI); */
}

function addTodo(e){
console.log("asdfasfasf");
    const newText = text.value.trim();
    console.log(newText);
    if(newText===""){
        showAlert("danger","Lütfen bir todo girin...");
    }
    else{
        /* addTodoToUI(newText);
        addTodoToStorage(newText); */
        showAlert("","Todo başarıyla eklendi...");
    }
    
   
    e.preventDefault();
}


function showAlert(type,message) {
    const alert=document.createElement("div");
    alert.className='alert alert-'+type;
    alert.textContent=message;
    ust.appendChild(alert);

    //setTimeout

    setTimeout(function() {
        alert.remove();
    },1000);
}

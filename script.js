var idx = 1;
function deleteTodo(idx){
    const divElement = document.getElementById("todo" + idx);
    document.getElementById("todos").removeChild(divElement);
}

function todo (){
    const element = document.getElementById("todoInput");
    const newDiv1 = document.createElement("div");
    newDiv1.innerHTML = element.value;
    if (element.value == ""){
        return ;
    }
    element.value = "";
    newDiv1.setAttribute ("id", ("todo" + idx));
    const parentDiv = document.getElementById("todos");
    const newDiv2 = document.createElement("button");
    newDiv2.innerHTML = "Delete";
    newDiv2.setAttribute ("onclick", "deleteTodo(" + idx + ")");
    newDiv1.appendChild (newDiv2);
    parentDiv.appendChild (newDiv1);
    idx++;
}


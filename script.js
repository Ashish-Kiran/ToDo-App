var idx = 1;

function deleteTodo(idx) {
    const divElement = document.getElementById("todo" + idx);
    document.getElementById("todos").removeChild(divElement);
}

function todo() {
    const element = document.getElementById("todoInput");
    if (element.value == "") {
        return;
    }

    const parentDiv = document.getElementById("todos");

    const newDiv1 = document.createElement("div");
    newDiv1.className = "todo-item";
    newDiv1.setAttribute("id", "todo" + idx);

    const todoText = document.createElement("div");
    todoText.className = "todo-text";

    const dot = document.createElement("div");
    dot.className = "todo-dot";

    todoText.appendChild(dot);
    todoText.innerHTML += element.value;

    const newDiv2 = document.createElement("button");
    newDiv2.className = "delete-btn";
    newDiv2.innerHTML = "🗑 Delete";
    newDiv2.setAttribute("onclick", "deleteTodo(" + idx + ")");

    newDiv1.appendChild(todoText);
    newDiv1.appendChild(newDiv2);
    parentDiv.appendChild(newDiv1);

    element.value = "";
    idx++;
}

document.getElementById("todoInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        todo();
    }
});
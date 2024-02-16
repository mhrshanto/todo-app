const task = document.getElementById("todo-task");
const listBody = document.querySelector(".list-body");

function addTask(){
    if(task.value != "") {
        let bodyText = "";
        bodyText += `<div class="task-field">
                        <input type="checkbox" name="task" id="task">
                        <label for="task">${task.value}</label>
                    </div>`
        const element = document.createElement("div");
        element.innerHTML = bodyText;
        
        listBody.appendChild(element);
    }
    else {
        alert("Please Enter The Task Name");
    }
    return task.value = "";
}
function seeWhat() {
    const completeTask = document.querySelectorAll(input[checked]);

    console.log(completeTask);
}
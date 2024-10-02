document.querySelector('#push').onclick = function() { 
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="complete">Complete</button>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        `;

        
        document.querySelector('#tasks').appendChild(taskElement);

        
        document.querySelector("#newtask input").value = "";
        taskElement.querySelector('.delete').onclick = function() {
            taskElement.remove();
        };

        taskElement.querySelector('.complete').onclick = function() {
            taskElement.classList.toggle('completed');
        };
    }
}

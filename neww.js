function addTask() {
    const taskInput = document.getElementById ('task-input');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value;

      if (taskText =='') {
        alert('Please enter task');
       return; 
      }

    const listItem = document.createElement('li');
    listItem.className = 'task';
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent= 'delete';
    deleteButton.className= 'delete-btn';

    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value='';

    document.getElementById('add-task-button').addEventListener('click',addTask);
    
}
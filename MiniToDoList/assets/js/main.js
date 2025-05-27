// DOM Element

const taskInput=document.getElementById('taskInput');
const addTaskBtn=document.querySelector('#addTaskBtn');
const taskList=document.getElementById('taskList');


// create a function add a new task
function addTask(){
    const taskText=taskInput.value.trim();

      // if input is empty
      if(taskText===''){
        alert("plz enter a task");
        return;
    }

    // create elements
    const li=document.createElement('li');
    li.className='task-item';

    const span=document.createElement('span');
    span.className='task-text';
    span.textContent=taskText;

    const deleteBtn=document.createElement('button');
    deleteBtn.className='btn delete-btn';
    deleteBtn.textContent='delete';

    const completebtn=document.createElement('button');
    completebtn.className='btn complete-btn';
    completebtn.textContent='Mark As Completed';

    const editBtn=document.createElement('button');
    editBtn.className='btn edit-btn';
    editBtn.textContent='Edit';

    // append elements
    const btnGroup=document.createElement('div');
    btnGroup.className = 'buttons';
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(completebtn);
    btnGroup.appendChild(deleteBtn);
    
    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);

    // clear input field
    taskInput.value=''; 
}


// Event add task on Button click
addTaskBtn.addEventListener('click',addTask);

// Event add task on ennter key
taskInput.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        addTask();
    }
});


// Event delete task
taskList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete-btn')){
        e.target.closest('li').remove();
    }

    if (e.target.classList.contains('complete-btn')){
        const taskText=e.target.closest('li').querySelector('.task-text');
        taskText.classList.toggle('completed');
    }


    if (e.target.classList.contains('edit-btn')){
        const taskItem = e.target.closest('li');
        const taskText = taskItem.querySelector('.task-text');
        
        // if user is editing the task, save the changes
        if (taskText.contentEditable === 'true') {
            taskText.contentEditable = 'false';
            e.target.textContent = 'Edit';
            taskText.classList.remove('editing');
            
        } else {
            taskText.contentEditable = 'true';
            taskText.focus();
            e.target.textContent = 'Save';
            taskText.classList.add('editing');
        }
    }

});





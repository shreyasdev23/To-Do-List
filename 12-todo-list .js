const todoList=[{
  name:'make dinner',
  dueDate:'04-10-2023'
 },{ 
  name:'wash plates',
  dueDate:'04-10-2023'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML= '';

  todoList.forEach((todoObject,index) =>{
    const{name,dueDate}=todoObject;
    const html =`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;

  });
  document.querySelector('.js-todo-list').innerHTML=todoListHTML;
  document.querySelectorAll('.delete-todo-button')
  .forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList(); 
    });
     
    });
  };

  document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo();
  });
  document.querySelector('.js-delete-todo-button').addEventListener('click',()=>{

  });
function addTodo(){
const inputElement = document.querySelector('.js-name-input');
const dateInputElement=document.querySelector('.js-due-date-input');
const dueDate=dateInputElement.value;
const name=inputElement.value;
todoList.push({ 
  //name:name,
  //dueDate:dueDate
  name,
  dueDate
});

inputElement.value='';
renderTodoList();
}
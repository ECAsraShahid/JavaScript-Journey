let todoarray =[];

const saved = JSON.parse(localStorage.getItem('todoArray'));


if(saved){
  todoarray = saved;
}
else{
  console.log('Tom cruise');
}



function addTodo(){
  
  const name = document.querySelector('.js-input').value;
  const duedate = document.querySelector('.js-duedate-input').value;
  todoarray.push({'name'  : name,
    'duedate' : duedate
  });

  console.log(todoarray);

  document.querySelector('.js-input').value = '';

  localStorage.setItem('todoArray' , JSON.stringify(todoarray));
  
  todoDisplay();
  
}

function todoDisplay(){
  let html = '';
  for(let i=0 ; i<todoarray.length ; i++){
    const value =  
    `<div> ${todoarray[i].name}</div>

    <div>${todoarray[i].duedate}</div>

    <button class="delete-button"
      onclick="todoarray.splice(${i} , 1)
      localStorage.setItem('todoArray' , JSON.stringify(todoarray));
      todoDisplay(); ">
        Delete
    </button>
      `;
    html += value;
  }
  
  document.querySelector('.js-list').innerHTML = html;

  
  
}

todoDisplay();

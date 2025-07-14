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

  todoarray.forEach(function(value,index){
    const add =  
    `<div> ${value.name}</div>

    <div>${value.duedate}</div>

    <button class="delete-button"
        onclick="
          todoarray.splice(${index} , 1)
          localStorage.setItem('todoArray' , JSON.stringify(todoarray));
          todoDisplay(); 
        ">
        Delete
    </button>
      `;
    html += add;
  })
  
  document.querySelector('.js-list').innerHTML = html;
}

todoDisplay();

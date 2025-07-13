function action(buttonClass){
  
  let result = document.querySelector(`.${buttonClass}`).classList.contains('is-toggled');

  if(result === true){
  document.querySelector(`.${buttonClass}`).classList.remove('is-toggled');
  result=false;
  }
  else{
    document.querySelector(`.${buttonClass}`).classList.add('is-toggled');
    result=true;
  }

  console.log(result);
}
//example frequent repetition of events
/*
window.addEventListener('scroll', () => {
  console.log('shit');
}); 
*/

//add "throttle" func.
/*
 window.addEventListener('scroll', _.throttle(onScroll, 500));

  function onScroll() {
    console.log('shit');
} 
*/
  
//example "debounce func"
document
  .querySelector('.input')
  .addEventListener('input', _.debounce(onInput, 300));

function onInput() {
  let val = document.querySelector('#data').value;
  /* 
  console.log('input event!' + Date.now());
  */
  alert(`Вы ввели ${val} Нажмите 'Ок' для продолжения`);
}

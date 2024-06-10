main = document.querySelector('[main-container]');
const pay = document.querySelector('[pay-now]');

// notification toast eventListener
pay.addEventListener('click', function () {
  main.classList.add('closed');
});

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const done = document.getElementById('done').checked;
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  let taskIdCounter = parseInt(localStorage.getItem('taskIdCounter')) || 0;

  taskIdCounter += 1;

  tasks.push({ id: taskIdCounter, name, description, date, done });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('taskIdCounter', taskIdCounter.toString());
  
  function goToTask() {

  window.location.href = 'tasks.html';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const tableBody = document.querySelector('#todo-table tbody');

  tasks.forEach(task => {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = task.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = task.name;
    row.appendChild(nameCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = task.description;
    row.appendChild(descriptionCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = task.date;
    row.appendChild(dateCell);

    const doneCell = document.createElement('td');
    doneCell.textContent = task.done ? 'Yes' : 'No';
    row.appendChild(doneCell);

    tableBody.appendChild(row);
  });
});

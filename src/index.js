import './style.css';

const tasks = [
  {
    description: 'Calling my friend',
    completed: false,
    index: 0,
  },
  {
    description: 'Finishing the list structure',
    completed: false,
    index: 1,
  },
  {
    description: 'Clean the kitchen',
    completed: false,
    index: 2,
  },
  {
    description: 'Walk the dogs',
    completed: false,
    index: 3,
  },
  {
    description: 'Do the shopping',
    completed: false,
    index: 4,
  },
];
const taskList = document.getElementById('task-list');

const displayTask = (el) => {
  const task = document.createElement('li');
  task.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  task.appendChild(checkBox);

  const taskDesc = document.createElement('p');
  taskDesc.classList.add('task-d');
  taskDesc.textContent = el.description;
  task.appendChild(taskDesc);

  const dots = document.createElement('i');
  dots.classList.add('fa-solid', 'fa-ellipsis-vertical');
  task.appendChild(dots);

  taskList.appendChild(task);
};

tasks.forEach((element) => {
  displayTask(element);
});
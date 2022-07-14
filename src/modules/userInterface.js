import removeTask from './removeTask.js';
import changeDesc from './changeDesc.js';
import checkTask from './checkTask.js';

export default class UIDisplay {
  static createTask = (el) => {
    const task = document.createElement('li');
    task.classList.add('task');

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.classList.add('checkB');
    task.appendChild(checkBox);

    const taskDesc = document.createElement('input');
    taskDesc.classList.add('task-d');
    taskDesc.value = `${el.description}`;
    task.appendChild(taskDesc);

    const dots = document.createElement('i');
    dots.classList.add('fa-solid', 'fa-ellipsis-vertical', 'show');
    task.appendChild(dots);

    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can');
    task.appendChild(trashIcon);

    checkBox.addEventListener('change', () => {
      checkTask(dots, taskDesc, task, trashIcon, el);
    });

    taskDesc.addEventListener('click', () => {
      changeDesc(taskDesc, task, el);
    });

    trashIcon.addEventListener('click', () => {
      removeTask(el);
    });

    document.getElementById('task-list').appendChild(task);
  };

  static displayTaks(arr) {
    arr.forEach((el) => UIDisplay.createTask(el));
  }
}

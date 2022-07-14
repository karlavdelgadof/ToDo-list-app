import * as Store from './local-storage.js';
import taskArr from './taskarr.js';

const checkTask = (dots, taskDesc, task, trashIcon, el) => {
  dots.classList.toggle("show");
  trashIcon.classList.toggle("show");
  taskDesc.classList.toggle("cross");
  task.classList.toggle("active");
  if (el.completed === false) {
    el.completed = true;
  } else {
    el.completed = false;
  }
  Store.addTask(taskArr);
};

export default checkTask;

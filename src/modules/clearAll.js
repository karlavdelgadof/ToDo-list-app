import removeTask from './removeTask.js';
import taskArr from './taskarr.js';

const clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', () => {
  const remain = taskArr;
  const completed = remain.filter((task) => task.completed === true);
  completed.forEach((task) => removeTask(task));
});
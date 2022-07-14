import taskArr from './taskarr.js';
import removeTask from './removeTask.js';

const filterAll = (arr) => {
  const remain = arr;
  const completed = remain.filter((task) => task.completed === true);
  completed.forEach((task) => removeTask(task));
}

export default filterAll;
  

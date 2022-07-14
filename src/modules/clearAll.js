import removeTask from "./removeTask";
import taskArr from "./taskarr";

const clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', () => {
  const remain = taskArr;
  const completed = remain.filter((task) => task.completed === true);
  completed.forEach((task) => removeTask(task));
});
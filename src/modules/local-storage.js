const getTasks = (tasks) => {
  tasks = tasks.push(...JSON.parse(localStorage.getItem('tasks')));
  return tasks;
};

const addTask = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { getTasks, addTask };

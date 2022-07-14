/** * @jest-environment jsdom */

import removeTask from '../removeTask.js';

test('Remove a task', () => {
  document.body.innerHTML = '<ul id="task-list"><li class="task"><input type="checkbox" class="checkB"><input class="task-d"><i class="fa-solid fa-ellipsis-vertical show"></i><i class="fa-solid fa-trash-can"></i></li></ul>';

  const newTask = {
    description: 'Dummie',
    completed: true,
    index: 1,
  };
  removeTask(newTask);

  const list = document.querySelectorAll('.task');
  expect(list).toHaveLength(0);
});

// test ('Remove a task')
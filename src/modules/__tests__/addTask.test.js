/** * @jest-environment jsdom */
import UIDisplay from '../userInterface.js';

test('Add a new task', () => {
  document.body.innerHTML = '<ul id="task-list"></ul>';

  const newTask = {
    description: 'desc',
    completed: false,
    index: 0,
  };

  UIDisplay.createTask(newTask);
  const list = document.querySelectorAll('.task');

  expect(list).toHaveLength(1);
});

// test ('Remove a task')
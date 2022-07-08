import './style.css';
import * as Store from './modules/local-storage.js';
import UIDisplay from './modules/userInterface.js';
import taskArr from './modules/taskarr.js';
import removeTask from './modules/remove-storage.js';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const syncIcon = document.getElementById('sync');

syncIcon.addEventListener('click', () => {
  taskArr.forEach((task) => { task.completed = true; });
  const completed = taskArr.filter((task) => task.completed === true);
  completed.forEach((task) => removeTask(task));
});

const addInput = document.getElementById('add');

document.addEventListener('DOMContentLoaded', () => {
  Store.getTasks(taskArr);
  taskArr.forEach((task) => { task.completed = false; });
  Store.addTask(taskArr);
  UIDisplay.displayTaks(taskArr);
});

const addIcon = document.getElementById('add-icon');

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    const task = new Task(addInput.value, false, taskArr.length + 1);
    taskArr.push(task);
    // Prevent submit
    e.preventDefault();
    UIDisplay.createTask(task);
    Store.addTask(taskArr);

    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

addIcon.addEventListener('click', (e) => {
  if (addInput.value) {
    const task = new Task(addInput.value, false, taskArr.length + 1);
    taskArr.push(task);
    // Prevent submit
    e.preventDefault();
    UIDisplay.createTask(task);
    Store.addTask(taskArr);

    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

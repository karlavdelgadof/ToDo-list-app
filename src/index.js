import './style.css';
import * as Store from './modules/local-storage.js';
import UIDisplay from './modules/userInterface.js';
import taskArr from './modules/taskarr.js';
import removeTask from './modules/removeTask.js';
import addNewTask from './modules/addtask.js';
import filterAll from './modules/clearAll';

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
    addNewTask(addInput.value);
    e.preventDefault();
    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

addIcon.addEventListener('click', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    addNewTask(addInput.value);
    e.preventDefault();
    addInput.value = '';
  } else {
    addInput.setAttribute('required', '');
  }
});

const clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', () => {
  filterAll(taskArr);
});
import './style.css';
import * as Store from './modules/local-storage.js';
import UIDisplay from './modules/userInterface.js';
import taskArr from './modules/taskarr.js';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addInput = document.getElementById('add');

document.addEventListener('DOMContentLoaded', () => {
  Store.getTasks(taskArr);
  UIDisplay.displayTaks(taskArr);
});

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

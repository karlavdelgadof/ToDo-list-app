import './style.css';
import {UIDisplay} from './modules/userInterface';
import * as Store from './modules/local-storage';
import taskList from './modules/userInterface';
import removeTask from './modules/remove-storage';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let taskArr = [];
export default taskArr;

const addInput = document.getElementById('add');

document.addEventListener('DOMContentLoaded', () => {
  Store.getTasks(taskArr);
  UIDisplay.displayTaks(taskArr);
});

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && addInput.value) {
    const task = new Task(addInput.value, false, taskArr.length + 1);
    taskArr.push(task)
    // Prevent submit
    e.preventDefault();
    UIDisplay.createTask(task);
    Store.addTask(taskArr);
    addInput.value = ''
    console.log(taskArr)
  } else {
    addInput.setAttribute('required', '');
  }
  
});



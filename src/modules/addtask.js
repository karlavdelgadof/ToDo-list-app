import Task from "./taskel.js";
import UIDisplay from "./userInterface.js";
import * as Store from './local-storage.js';
import taskArr from './taskarr.js';

const addNewTask = (value) => {
    const task = new Task(value, false, taskArr.length + 1);
    taskArr.push(task);
    UIDisplay.createTask(task);
    Store.addTask(taskArr);
};

export default addNewTask

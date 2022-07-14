import taskArr from './taskarr.js';
import * as Store from './local-storage.js';

const removeTask = (obj) => {
  const trashIcon = document.querySelectorAll('.fa-trash-can');
  const trashArr = Array.from(trashIcon);
  if (obj.completed === true) {
    trashArr[obj.index - 1].parentElement.remove();

    taskArr.splice(obj.index - 1, 1);
    for (let i = 0; i < taskArr.length; i += 1) {
      taskArr[i].index = i + 1;
    }
  }
  Store.addTask(taskArr);
};

export default removeTask;

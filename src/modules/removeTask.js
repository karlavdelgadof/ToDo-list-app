import taskArr from './taskarr.js';
import * as Store from './local-storage.js';

const removeTask = (index) => {
  const trashIcon = document.querySelectorAll('.fa-trash-can');
  const trashArr = Array.from(trashIcon);
  if (index.completed === true) {
    trashArr[index.index - 1].parentElement.remove();

    taskArr.splice(index.index - 1, 1);
    for (let i = 0; i < taskArr.length; i += 1) {
      taskArr[i].index = i + 1;
    }
  }
  Store.addTask(taskArr);
};

export default removeTask;

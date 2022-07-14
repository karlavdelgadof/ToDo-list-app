import taskArr from "./taskarr";
import * as Store from './local-storage.js';

const changeDesc = (input, taskel, el) => {
  taskel.classList.toggle('active');
  input.classList.toggle('active');
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.value = e.target.value;
      input.classList.toggle('active');
      taskel.classList.toggle('active');
      taskArr[el.index - 1].description = input.value;
      Store.addTask(taskArr);
    }
  });
};

export default changeDesc;
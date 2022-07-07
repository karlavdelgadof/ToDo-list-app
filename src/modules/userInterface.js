import taskArr from "../index";
import * as Store from "./local-storage";
import removeTask from "./remove-storage";

const taskList = document.getElementById("task-list");
export default taskList;

export class UIDisplay {
  static createTask = (el) => {
    const task = document.createElement("li");
    task.classList.add("task");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("checkB");
    task.appendChild(checkBox);

    const taskDesc = document.createElement("input");
    taskDesc.classList.add("task-d");
    taskDesc.value = `${el.description}`;
    task.appendChild(taskDesc);

    const dots = document.createElement("i");
    dots.classList.add("fa-solid", "fa-ellipsis-vertical", "show");
    task.appendChild(dots);

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash-can");
    task.appendChild(trashIcon);

    checkBox.addEventListener("change", () => {
      dots.classList.toggle("show");
      trashIcon.classList.toggle("show");
      taskDesc.classList.toggle("cross");
      if (el.completed === false) {
        el.completed = true;
      } else {
        el.completed = false;
      }
      Store.addTask(taskArr);
    });

    taskDesc.addEventListener("click", () => {
      changeDesc(taskDesc, task, el);
    });

    trashIcon.addEventListener('click', () => {
      removeTask(el);
    })

    taskList.appendChild(task);
  };

  static displayTaks(arr) {
    arr.forEach((el) => UIDisplay.createTask(el));
  }
}

const changeDesc = (input, taskel, el) => {
  taskel.classList.toggle("active");
  input.classList.toggle("active");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      input.value = e.target.value;
      input.classList.toggle("active");
      taskel.classList.toggle("active");
      taskArr[el.index - 1].description = input.value;
      Store.addTask(taskArr);
      console.log(taskArr);
    }
  });
};

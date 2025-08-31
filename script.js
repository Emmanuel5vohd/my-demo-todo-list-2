const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTaskButton = document.getElementById("add-task-button");
const alertEmpty = document.querySelector(".alert-empty");

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};
const showTasks = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showTasks();

const addTask = () => {
  if (inputBox.value === "") {
    alertEmpty.classList.add("active");
    inputBox.style.pointerEvents = "none";
    setTimeout(() => {
      alertEmpty.classList.remove("active");
      inputBox.style.pointerEvents = "all";
    }, 2000);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};
addTaskButton.addEventListener("click", addTask);

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

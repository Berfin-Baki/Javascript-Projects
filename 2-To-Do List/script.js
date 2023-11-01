document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText.trim() === "") {
      alert("Lütfen bir görev girin.");
    } else {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = "";

      taskItem.addEventListener("click", function () {
        taskItem.remove();
      });
    }
  });
});

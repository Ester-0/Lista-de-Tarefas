let item = 1;

function addTask() {
  const inputTask = document.getElementById("input-write-task");
  inputTask.style.display = "inline";
  const bntSaveTask = document.querySelectorAll("[class='btn-save-task']");

  bntSaveTask.forEach(btn => {
    btn.style.display = "inline";
  });
}

function saveTask(shift) {
  const inputTask = document.getElementById("input-write-task");
  let taskUser = inputTask.value;

  const checkedCheckboxIDs = getCheckedCheckboxIDs(shift);

  if (taskUser != null && taskUser.length > 0) {
    const task = document.getElementById(shift);
    task.innerHTML += `<li id="${item}">
                          <input type="checkbox" id="${item}-checkbox" onchange="handleCheckboxChange('${item}')"/>
                          <span>${taskUser}</span>
                          <i class="fa-solid fa-trash-can" 
                             id="${item}-icon" 
                             onclick="(document.getElementById(${item}).remove())">
                          </i>
                        </li>`;

    inputTask.value = "";
    item++;
  }
  setTimeout(() => {
    checkedCheckboxIDs.map(id => {
      const checkbox = document.getElementById(id);
      checkbox.checked = true;
    });
  }, 0)
}

function handleCheckboxChange(id) {
  const checkbox = document.getElementById(id + "-checkbox");
  const icon = document.getElementById(id + "-icon");
  checkbox.checked ? icon.style.display = "inline" : icon.style.display = "none";
}

function getCheckedCheckboxIDs(idUl) {
  const taskDayList = document.getElementById(idUl);
  const checkboxes = taskDayList.querySelectorAll("input[type='checkbox']:checked");
  const checkboxIDs = Array.from(checkboxes).map(checkbox => checkbox.id);
  return checkboxIDs;
}


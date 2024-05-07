const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = input.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        input.value = '';
      }
    });

    function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.className = 'task';
      taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
      list.appendChild(taskItem);

      const deleteBtn = taskItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', function() {
        taskItem.remove();
      });
    }
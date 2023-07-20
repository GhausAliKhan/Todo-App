import './index.css';

const todoListBox = document.getElementById('todo-list-box');

const todoTasks = [
  {
    description: 'Do Workout',
    completed: true,
    index: 1,
  },
  {
    description: 'Make Breakfast',
    completed: true,
    index: 2,
  },
  {
    description: 'Finish Project',
    completed: true,
    index: 3,
  },
];

const todoListSort = todoTasks.sort((a, b) => a.index - b.index);

const generateTasks = () => {
  todoListSort.forEach((task) => {
    todoListBox.innerHTML += `
    <div class='todo-task-container'>
      <div class='task'>
        <input type='checkbox'
          id=${task.description}
          name=${task.description}>
        <li>${task.description}</li>
      </div>
      <span class="material-icons">more_vert</span>
    </div>
    `;
  });
};

generateTasks();

import './index.css';
import TodoApp from './modules/crud.js';

const todoListBox = document.getElementById('todo-list-box');
const todoApp = new TodoApp(todoListBox);

todoApp.render();

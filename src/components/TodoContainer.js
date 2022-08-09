import React from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleStatus = this.handleStatus.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addTasks = this.addTasks.bind(this);
    this.editTask = this.editTask.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  addTasks(task) {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: task,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  }

  handleStatus(id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  handleDelete(id) {
    this.setState((previous) => ({
      todos: previous.todos.filter((todo) => todo.id !== id),
    }));
  }

  editTask(updatedTask, id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTask;
        }
        return todo;
      }),
    }));
  }

  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      const todoTasks = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', todoTasks);
    }
  }

  clearCompleted() {
    this.setState((previous) => ({
      todos: previous.todos.filter((todo) => todo.completed !== true),
    }));
  }

  componentDidMount() {
    const todoTasks = localStorage.getItem('todos');
    if (JSON.parse(todoTasks)) {
      this.setState({
        todos: JSON.parse(todoTasks),
      });
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>To-D0:</h1>
        </header>
        <InputTodo addTaskItem={this.addTasks} />
        <TodosList todos={this.state.todos} updateStatus={this.handleStatus} deleteTask={this.handleDelete} updateTask={this.editTask} />
        <button className="clear-btn" id={this.state.todos.length ? '' : 'hide'} onClick={this.clearCompleted}>clear completed</button>
      </div>
    );
  }
}

export default TodoContainer;

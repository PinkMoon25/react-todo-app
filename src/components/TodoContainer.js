import React from 'react';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends React.PureComponent {
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

  componentDidMount() {
    const todoTasks = localStorage.getItem('todos');
    if (JSON.parse(todoTasks)) {
      this.setState({
        todos: JSON.parse(todoTasks),
      });
    }
  }

  componentDidUpdate(prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      const todoTasks = JSON.stringify(todos);
      localStorage.setItem('todos', todoTasks);
    }
  }

  handleDelete(id) {
    this.setState((previous) => ({
      todos: previous.todos.filter((todo) => todo.id !== id),
    }));
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

  addTasks(task) {
    const { todos } = this.state;
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: task,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTask],
    });
  }

  editTask(updatedTask, id) {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          const todoTitle = todo;
          todoTitle.title = updatedTask;
        }
        return todo;
      }),
    }));
  }

  clearCompleted() {
    this.setState((previous) => ({
      todos: previous.todos.filter((todo) => todo.completed !== true),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <header>
          <h1><em>To-do</em></h1>
        </header>
        <InputTodo addTaskItem={this.addTasks} />
        <TodosList
          todos={todos}
          updateStatus={this.handleStatus}
          deleteTask={this.handleDelete}
          updateTask={this.editTask}
        />
        <button type="button" className="clear-btn" id={todos.length ? '' : 'hide'} onClick={this.clearCompleted}>
          clear completed
        </button>
      </div>
    );
  }
}

export default TodoContainer;

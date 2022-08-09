import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            Id={todo.id}
            status={todo.completed}
            updateStatus={this.props.updateStatus}
            task={todo.title}
            deleteTask={this.props.deleteTask}
            updateTask={this.props.updateTask}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;

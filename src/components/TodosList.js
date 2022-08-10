import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const {
      todos, updateStatus, updateTask, deleteTask,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            Id={todo.id}
            status={todo.completed}
            updateStatus={updateStatus}
            task={todo.title}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  updateStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default TodosList;

import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

class TodoItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
    this.handleEditing = this.handleEditing.bind(this);
    this.handleEditingDone = this.handleEditingDone.bind(this);
  }

  handleEditing() {
    this.setState({
      editable: true,
    });
  }

  handleEditingDone() {
    this.setState({
      editable: false,
    });
  }

  render() {
    const { editable } = this.state;
    const {
      Id, status, task, updateStatus, deleteTask, updateTask,
    } = this.props;
    const viewMode = {};
    const editMode = {};
    if (editable) viewMode.display = 'none';
    else editMode.display = 'none';
    return (
      <li>
        <input type="checkbox" checked={status} onChange={() => updateStatus(Id)} />
        <span className={status ? 'task-complete' : ''} onDoubleClick={() => this.handleEditing()} style={viewMode}>{task}</span>
        <input
          type="text"
          className="edit-task"
          style={editMode}
          onChange={(e) => updateTask(e.target.value, Id)}
          onBlur={this.handleEditingDone}
          value={task}
        />
        <button type="button" onClick={() => { deleteTask(Id); }} aria-label="delete"><FaTrash /></button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  Id: PropTypes.number.isRequired,
  updateStatus: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;

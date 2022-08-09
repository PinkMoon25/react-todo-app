import React from 'react';

class TodoItem extends React.Component {
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

  handleEditingDone(e) {
    this.setState({
      editable: false,
    });
  }

  render() {
    const viewMode = {};
    const editMode = {};
    if (this.state.editable) viewMode.display = 'none';
    else editMode.display = 'none';
    return (
      <li>
        <input type="checkbox" checked={this.props.status} onChange={() => this.props.updateStatus(this.props.Id)} />
        <span className={this.props.status ? 'task-complete' : ''} onDoubleClick={() => this.handleEditing()} style={viewMode}>{this.props.task}</span>
        <input type="text" className="edit-task" style={editMode} onChange={(e) => this.props.updateTask(e.target.value, this.props.Id)} onBlur={this.handleEditingDone} value={this.props.task} />
        <button onClick={() => { this.props.deleteTask(this.props.Id); }}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;

import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.handleTask = this.handleTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTask(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit(e) {
    const { task } = this.state;
    const { addTaskItem } = this.props;
    if (task.trim()) {
      e.preventDefault();
      addTaskItem(task);
      this.setState({
        task: '',
      });
    }
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Tasks" value={task} onChange={this.handleTask} required />
        <button type="button" onClick={this.handleSubmit} aria-label="submit"><FaPlusCircle /></button>
      </form>
    );
  }
}

InputTodo.propTypes = { addTaskItem: PropTypes.func.isRequired };

export default InputTodo;

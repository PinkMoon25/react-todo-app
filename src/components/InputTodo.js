import React, {Component} from "react";

class InputTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: '',
        }
        this.handleTask = this.handleTask.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleTask(e){
        this.setState({
            task: e.target.value,
        })
    }
    handleSubmit(e){
        if(this.state.task.trim()){
            e.preventDefault();
            this.props.addTaskItem(this.state.task)
            this.setState({
                task: '',
            })
        }
        else {
            alert("please enter task")
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Tasks" value={this.state.task} onChange={this.handleTask}/>
                <button>Submit</button>
            </form>
        )
    }
};

export default InputTodo
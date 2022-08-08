import React from "react";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    id: Math.floor(Math.random()*1000),
                    title: 'setup react to-do app development environment',
                    completed: true,
                }
            ]
        }
        this.handleStatus = this.handleStatus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.addTasks = this.addTasks.bind(this);
    }
    addTasks(task){
        const newTask = {
            id: Math.floor(Math.random()*1000),
            title: task,
            completed: false,
        }
        this.setState({
            todos: [...this.state.todos, newTask]
        })
    }

    handleStatus(id){
        this.setState((prevState)=>({
            todos: prevState.todos.map((todo)=>{
                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
        console.log(this.state);
    };

    handleDelete(id){
        this.setState((previous)=>({
            todos: previous.todos.filter(todo => todo.id !== id)
        }))
    }
    
    render(){
        return (
            <div className="container">
                <header>
                    <h1>To-D0:</h1>
                </header>
                <InputTodo addTaskItem={this.addTasks}/>
                <TodosList todos={this.state.todos} updateStatus={this.handleStatus} deleteTask={this.handleDelete}/>
            </div>
        );
    }
};

export default TodoContainer
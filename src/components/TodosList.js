import React from "react";

class TodosList extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
                {this.props.todos.map((todo) =>(
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={()=>this.props.updateStatus(todo.id)} /> 
                        {todo.title}
                        <button onClick={()=>{this.props.deleteTask(todo.id)}}>Delete</button>
                    </li>
                ))}
            </ul>
        )
    }
};  

export default TodosList

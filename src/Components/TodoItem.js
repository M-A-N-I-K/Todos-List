import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <h4>{props.todos.title}</h4>
            <p>{props.todos.desc}</p>
            <button className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}

export default TodoItem


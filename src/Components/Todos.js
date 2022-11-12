import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const myStyle = {
        minHeight: "70vh",
    }
    return (
        <div className='container my-3' style={myStyle}>
            <h3>Todos List</h3>
            {props.todos.length === 0 ? "No todos to show." :
                props.todos.map((todo) => {
                    return (
                        <>
                            <TodoItem todo={todo} key={todo.sNo} onDelete={() => { props.onDelete(todo) }} />
                            <hr />
                        </>
                    )
                })}
        </div>
    )
}

export default Todos


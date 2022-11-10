import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    return (
        <div className='container'>
            <h3 className="text-center">Todos List</h3>
            {props.todos.length === 0 ? "No todos to show." :
                props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sNo} onDelete={() => { props.onDelete(todo) }} />)
                })}

        </div>
    )
}

export default Todos


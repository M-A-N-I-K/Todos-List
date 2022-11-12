import React, { useState } from 'react'

const AddToDo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault()
    if (!title || !desc) {
      alert("Title or description cannot be blank");
    }
    props.addTodo(title, desc);
  }
  return (
    <div className='container my-3'>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success btn-sm" onClick={AddToDo}>Add Todo</button>
      </form>
    </div>
  )
}

export default AddToDo


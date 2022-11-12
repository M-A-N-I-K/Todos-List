import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState } from 'react'
import AddToDo from './Components/AddToDo';


function App() {
  const onDelete = (todo) => {
    console.log("Called on delete");
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    let sNo;
    if (todos.length === 0) {
      sNo = 0;
    }
    else {

      sNo = todos[todos.length - 1].sNo + 1;
      const myTodo = {
        sNo: sNo,
        title: "Learn reactjs",
        desc: "Work on project on rectjs"
      }
      setTodos([...todos, myTodo]);
    }
  }
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="App">
        <Navbar title="MyTodosList" searchBar={false} />
        <AddToDo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;

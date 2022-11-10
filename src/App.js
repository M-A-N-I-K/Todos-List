import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState } from 'react'


function App() {
  const onDelete = (todo) => {
    console.log("Called on delete");
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const [todos, setTodos] = useState([{
    sNo: 1,
    title: "Go to the market",
    desc: "You need to go to market"
  }, {
    sNo: 2,
    title: "Go to the Mall",
    desc: "You need to go to Mall"
  }, {
    sNo: 3,
    title: "Go to the Gym",
    desc: "You need to go to Gym"
  }
  ]);

  return (
    <>
      <div className="App">
        <Navbar title="MyTodosList" searchBar={false} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;

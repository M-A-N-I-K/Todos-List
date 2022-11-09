import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';

function App() {
  let todos = [{
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
  ]
  return (
    <>
      <div className="App">
        <Navbar title="MyTodosList" searchBar={false} />
        <Todos todos={todos} />
        <Footer />
      </div>
    </>
  );
}

export default App;

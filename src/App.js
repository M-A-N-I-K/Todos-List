import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';

function App() {

  let todo = [{
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
  const onDelete = (todo) => {
    console.log("Called on delete");
  }
  return (
    <>
      <div className="App">
        <Navbar title="MyTodosList" searchBar={false} />
        <Todos todo={todo} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;

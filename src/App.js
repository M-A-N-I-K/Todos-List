import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Todos />
        <Footer />
      </div>
    </>
  );
}

export default App;

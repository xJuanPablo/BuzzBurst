import './App.css';
import './pages/Home/home.css'
import Home from './pages/Home/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      < NavBar/>
      <Home/>
    </div>
  );
}

export default App;

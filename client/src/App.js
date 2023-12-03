import './App.css';
import './pages/Home/home.css'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import {Routes, Route} from 'react-router-dom';
import useLocalStorage from './Hooks/useLocalStorage';


function App() {
  const [id, setId] = useLocalStorage('id');
  return (
    <Routes className="App">
      {id}
      <Route index element={<Home/>}/>
      <Route path={'/login'} element={
      <Login onIdSubmit={setId}/>
      }/>
    </Routes>
  );
}

export default App;

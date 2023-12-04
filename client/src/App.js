import './App.css';
import './pages/Home/home.css'
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import useLocalStorage from './Hooks/useLocalStorage';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { ContactsProvider } from './Context/ContactsProvider';
import { ConversationsProvider } from './Context/ConversarionProvider';

function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={id ? dashboard : <Login onIdSubmit={setId} />}
      />
      <Route path="/dashboard" element={<Dashboard id={id} />} />
    </Routes>
  );
}

export default App;

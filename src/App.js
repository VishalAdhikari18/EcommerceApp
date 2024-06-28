import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Home from './components/home';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/user/:username" element={<Profile />} />
                  <Route path="/cart/:username" element={<Cart />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;

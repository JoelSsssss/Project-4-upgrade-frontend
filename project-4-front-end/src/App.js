import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './components/Home';
import UsercardsList from './components/UserCardsList';
import TemplatesIndex from './components/Templates';
import CreateUserCards from './components/createUsercards';
import Login from './components/LogIn';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/usercards' element={<UsercardsList />} />
        <Route path='/templates' element={<TemplatesIndex />} />
        <Route path='/auth/login/' element={<Login />} />
        <Route path='/usercards/create' element={<CreateUserCards />} />
      </Routes>
      {/* <ToastContainer></ToastContainer> */}
    </Router>
  );
}

export default App;

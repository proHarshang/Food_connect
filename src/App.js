import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/Home';
import Donate from './pages/Donate';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} ></Route>
          <Route path="/donate" exact element={<Donate />} ></Route>
          <Route path="/about" exact element={<About />} ></Route>
          <Route path="/login" exact element={<Login />} ></Route>
          <Route path="/register" exact element={<Register />} ></Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
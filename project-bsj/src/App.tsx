import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AddGame from './pages/AddGame';
import './App.css';

function App() {
  return (
    <Router>
      <>
      <Header/>
        <nav className='nav'>
          <ul>
            <li className='border-separator'><Link to='/AddGame' className='li-css'>게임등록</Link></li>
            <li className='border-separator'><Link to='/AddGame' className='li-css'>게임추천</Link></li>
            <li className='border-separator'><Link to='/AddGame' className='li-css'>보유목록</Link></li>
            <li><Link to='/AddGame' className='li-css'>찜목록</Link></li>
          </ul>
        </nav> 
        <Routes>
          <Route path='/' element={<Main />} />      
          <Route path='/AddGame' element={<AddGame />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
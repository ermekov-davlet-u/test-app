import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/index';
import { MdChevronLeft } from 'react-icons/md';
import Filter from './components/Filter/index';
import Content from './components/Content/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function MainPage() {
  return (
    <main className="main-container">
      <div>
          <Menu />
      </div>
      <div className="main-content">

          <Header />
              <button className='back_btn'> <MdChevronLeft className='back__icon' /> Вернуться на главную </button>
          <Filter />
          <Content />
      </div>
    </main>
  );
}

function App() {
  return ( 
    <>
      <BrowserRouter >
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<MainPage />}/>
        </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;

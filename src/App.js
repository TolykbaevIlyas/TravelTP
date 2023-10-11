import React from 'react';
import c from './App.css';
import {
  Route,
  BrowserRouter,
  Routes,
  redirect,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './component/header/Header';


const App = (props) => {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header></Header>
            <div className='app-wrapper-content'>
              <Routes>
                <Route path="/" element={
                      <Home/>
                  }></Route>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    
  );
}

export default App;

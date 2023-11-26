import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CreateCustomer from "./CreateCustomer";
import Posts from './Posts';
import Search from './Search';
import Delete from './Delete';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App />}/>
        <Route path='/create' element={<CreateCustomer/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/deleteById' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


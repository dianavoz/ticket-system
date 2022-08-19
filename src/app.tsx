
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Orders from "../src/components/Orders";
import Home from "../src/components/Home";


const App = () => {
  return (
    <>
    <div id="container">
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/orders' element={<Orders/>}></Route>
      </Routes>
   </div>
    </>
  );
};

export default App;

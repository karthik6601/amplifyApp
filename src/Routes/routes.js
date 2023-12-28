import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from '../Components/Navbar';
function Routing() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/'  />
    </Routes>
    </>
  )
}

export default Routing;
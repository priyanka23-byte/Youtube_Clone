
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './App.css';
import { useState } from 'react';
import Video from './Pages/Video/Video';
import {Route, Routes} from'react-router-dom';  

function App (){

const [sidebar, setSidebar]= useState(true);

const sideNavbar=(value)=>{
  setSidebar(value)
}


  return(
  <div className='App'>
  
  <Navbar  sideNavbar={sideNavbar}  sidebar={sidebar}/>
  <Routes>
    <Route path='/' element={ <Home  sidebar={sidebar}/>} />
    <Route path='/watch/:id' element={<Video />}/>
  </Routes>
 

  </div>
  )
}

export default App;
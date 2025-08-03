
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import './App.css';
import { useState } from 'react';
import Video from './Pages/Video/Video.jsx';
import {Route, Routes} from'react-router-dom';  
import Profile from './Pages/Profile/Profile.jsx';

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
    <Route path='/user/:id' element={<Profile  sidebar={sidebar}/>}/>
  </Routes>
 

  </div>
  )
}

export default App;
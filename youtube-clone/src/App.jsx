
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './App.css';
import { useState } from 'react';

function App (){

const [sidebar, setSidebar]= useState(true);

const sideNavbar=(value)=>{
  setSidebar(value)
}


  return(
  <div className='App'>
  
  <Navbar  sideNavbar={sideNavbar}  sidebar={sidebar}/>
  <Home  sidebar={sidebar}/>

  </div>
  )
}

export default App;
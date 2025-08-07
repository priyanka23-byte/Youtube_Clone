
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import Video from './Pages/Video/Video.jsx';
import {Route, Routes} from'react-router-dom';  
import Profile from './Pages/Profile/Profile.jsx';
import VideoUpload from './Pages/VideoUpload/VideoUpload.jsx';
import LogIn from "./Component/LogIn/LogIn.jsx";
import SignUp from './Pages/SignUp/SignUp.jsx';
import axios from 'axios';



function App (){

const [sidebar, setSidebar]= useState(true);

// useEffect(()=>{
//   axios.get('http://localhost:4000/api/allvideo').then(res=>{
//     console.log(res);
//   }).catch(err=>{
//     console.log(err);
//   })
// },[])

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
    <Route path='/:id/upload'element={<VideoUpload/>}/>
    <Route path='/'element={<LogIn/>}/>
     <Route path='/signup'element={<SignUp/>}/>


  </Routes>
 

  </div>
  )
}

export default App;
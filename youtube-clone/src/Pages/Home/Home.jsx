import React from 'react';
import Sidebar from "../../Component/Sidebar/Sidebar";
import Homepage from '../../Component/Homepage/Homepage';
import './Home.css';


const Home = ({sidebar}) => {
  return (
    <div className='home'>
        <Sidebar sidebar={sidebar}  />
        <Homepage  sidebar={sidebar} />
    </div>
    
  )
}

export default Home
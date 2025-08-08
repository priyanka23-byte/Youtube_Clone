import React from 'react';
import Sidebar from "../../Component/Sidebar/Sidebar.jsx";
import Homepage from '../../Component/Homepage/Homepage.jsx';
import './Home.css';

// Home  received 'sidebar' prop to control sidebar visibility
const Home = ({sidebar}) => {
  return (
    <div className='home'>
        <Sidebar sidebar={sidebar}  />
        <Homepage  sidebar={sidebar} />
    </div>
    
  )
}

export default Home
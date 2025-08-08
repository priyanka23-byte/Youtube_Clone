
import React ,{useState,useEffect} from 'react'
import './Profile.css'
import Sidebar from '../../Component/Sidebar/Sidebar.jsx'
import { FaCaretRight } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import axios from'axios';
import {useParams} from 'react-router-dom';

// Profile  receives 'sidebar' prop to control sidebar visibility
const Profile = ({sidebar}) => {

  //get the user id fromurl params
  const {id}= useParams();
  //state to hold arary of videos
  const [data, setData] = useState([]);
  const [user,setUser] = useState(null);
// fetching data from backend
  const  fetchProfileData= async ()=>{
    axios.get(`http://localhost:4000/api/${id}/channel`).then((response)=>{
      console.log(response);
      setData(response.data.video);
      //to set user info from first video object
      setUser(response.data.video[0],user);

    }).catch(err=>{
      console.log(err);
    })
    
  }

  useEffect(()=>{
    fetchProfileData();
  },[])


  return (
    <div className='profile'>
        <Sidebar sidebar={sidebar}/>
      
      <div className={sidebar?"profile-page":"profile-page-inactive"}>

        <div className="profile-Top">
            <div className="profileTop-section">
                <img className='profileTop-img' src="https://res.cloudinary.com/dg4wgozjr/image/upload/eeeo3sksxtcoeplieuyv.webp" />
            </div>
     
            <div className='profileTop-sectionAbout'>
                <div className="profileTop-secAbt_name">Coding World</div>
                <div className="profileTop-secAbt_info">@Sam 6.videos</div>

                <div className="profileTop-secAbt_info">
                 I am a software Engineer , working at Google
            </div>

            </div>
            

        </div>


        <div className="profileVideos">
         <div className="profileTitle">Videos &nbsp;<FaCaretRight /></div>

         <div className="profile_video">
{/*// Map over videos to display each one as a clickable link to watch page*/}
          {
            data.map((item,key)=>{
              return(
                <Link to ={`/watch/${item._id}`} className="video-block">
              <div className="video_block_thumbnail">
                <img className="video_block_thumbnail_img" src={item?.thumbnail} />
              </div>

             <div className="profileBlock_details">
                <div className="profileBlock_detailsName">{item?.title}</div>
                <div className="profileBlock_detailsAbout">Create at {item?.createdAt.slice(0,10)}</div>
             </div>

            </Link>
              )
            })
          }

         </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
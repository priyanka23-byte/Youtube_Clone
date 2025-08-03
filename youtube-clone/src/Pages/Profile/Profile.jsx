
import React from 'react'
import './Profile.css'
import Sidebar from '../../Component/Sidebar/Sidebar.jsx'
import { FaCaretRight } from "react-icons/fa6";
import {Link} from 'react-router-dom'


const Profile = ({sidebar}) => {
  return (
    <div className='profile'>
        <Sidebar sidebar={sidebar}/>
      
      <div className="profile-page">
        <div className="profile-Top">
            <div className="profileTop-section">
                <img src="https://www.logoai.com/uploads/resources/2023/06/19/c744293dbda881eef75f15e8692b52d2.jpeg" alt="" className='profileTop-img' />
            </div>
     
            <div className='profileTop-sectionAbout'>
                <div className="profileTop-secAbt_name">CodingWorld</div>
                <div className="profileTop-secAbt_info">@User  . 4 videos</div>

                <div className="profileTop-secAbt_info">
                 About Section of Channel
            </div>

            </div>
            

        </div>


        <div className="profileVideos">
         <div className="profileTitle">Videos &nbsp;<FaCaretRight /></div>

         <div className="profile_video">

            <Link to ={'/watch/7869'} className="video-block">
              <div className="video_block_thumbnail">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072" alt="" className="video_block_thumbnail_img" />
              </div>

             <div className="profileBlock_details">
                <div className="profileBlock_detailsName">Video Title</div>
                <div className="profileBlock_detailsAbout">create at 2025-07-30</div>
             </div>

            </Link>

             <Link to ={'/watch/7869'} className="video-block">
              <div className="video_block_thumbnail">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072" alt="" className="video_block_thumbnail_img" />
              </div>

             <div className="profileBlock_details">
                <div className="profileBlock_detailsName">Video Title</div>
                <div className="profileBlock_detailsAbout">create at 2025-07-30</div>
             </div>

            </Link>

             <Link to ={'/watch/7869'} className="video-block">
              <div className="video_block_thumbnail">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072" alt="" className="video_block_thumbnail_img" />
              </div>

             <div className="profileBlock_details">
                <div className="profileBlock_detailsName">Video Title</div>
                <div className="profileBlock_detailsAbout">create at 2025-07-30</div>
             </div>

            </Link>

            


         
         </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
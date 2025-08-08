import React,{useEffect} from "react";
import "./Homepage.css";
import {Link} from'react-router-dom'
import axios from'axios';
import { useState } from "react";

//passing sidebar as a props
const Homepage = ({ sidebar }) => {
//storing videodata in array 
const [data, setData] = useState([]);

//fetching api from backend
useEffect(()=>{
  axios.get('http://localhost:4000/api/allvideo').then(res=>{
    console.log(res.data.videos);
    setData(res.data.videos);
  }).catch(err=>{
    console.log(err);
  })
},[])

//categories displayed on top of homepage
  const options = [
    "All",
    "Music",
    "Webdevelopment",
    "DSA",
    "Javascript",
    "C++",
    "React",
    "Python",
    "Java",
    "MangoDb",
    "Fashion",
    "Technology",
    "Games",
    "Sports",
    "Friends",
    "Dance",
    "Songs",
    "Music",
    "Webdevelopment",
    "DSA",
    "Javascript",
    "C++",
    "React",
  ];
 // Wrapper div changes class based on sidebar prop for layout
  return (
    <div className={sidebar ? "homepage" : "fullhomepage"}>
      <div className={sidebar ? "homepage-option" : "fullhomepage-option"}>
        {options.map((item, index) => (
          <div key={index} className="homepage-list">
            {item}
          </div>
        ))}
      </div>
  {/* //rendering video cards*/}
      <div className={sidebar ? "home_mainpage":"mainpageWithoutSidebar"}>
   
      {
        data?.map((item,ind)=>{
          return(
               <Link to={`/watch/${item._id}`} className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src={item.thumbnail}
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src={item?.user?.profilePic}
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">{item?.title}</h3>
              <p className="videoChannel">{item?.user?.channelName}</p>
              <p className="videoStats">{item?.like} likes</p>
            </div>
          </div>
        </Link>
          );
        })
      }



        
 
       
      

      </div>
    </div>
  );
};

export default Homepage;

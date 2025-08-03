import React from 'react'
import './Video.css'
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";
import {Link} from 'react-router-dom';

const Video = () => {
  return (
    <div className='video'>
      <div className="videoPost">
        <div className="videoYoutube">
         <video width='400'controls autoplay className="video-foryou">
           
          <source src="https://www.youtube.com/embed/dQw4w9WgXcQ" type="video/mp4" />
          

         </video>
        </div>
        <div className="videoAbout">
          <div className="videoTitle">{"Javascript for beginners"}</div>
          <div className="profileBlock">
            <div className="profileBlock-left">
              <Link to={'/user/7869'} className="profileBlock-imgLeft">
                <img className="profileBlock-Image"src="https://www.logoai.com/uploads/resources/2023/06/19/c744293dbda881eef75f15e8692b52d2.jpeg" alt="" />
              </Link>
              <div className="videoAbout">
                <div className="videoUser">{"CodingWorld"}</div>
                <div className="videoDate">{"2025-07-28"}</div>

              </div>

                <div className="subscribeBtn">Subscribe</div>

            </div>


           <div className="profileLikeBlock">
            <div className="likeBtn">
              <MdOutlineThumbUp />
              <div className="likecount">{320}</div>
            </div>
            <div className="btn-divider"></div>

            <div className="likeBtn">
              <MdOutlineThumbDown /> 
            </div>
           </div>
        </div>

        <div className="About-sec">
          <div>2025-08-29</div>
          <div>Description for the video.</div>
        </div>

       <div className="comments-sec">
       <div className="comments-sec_Title">4 Comments</div>
       </div>

       <div className="selfcomment">
        <img className="selfcommentProfile" src="https://www.profilepicture.ai/styles/paranoia_agent.webp" alt="" />
       <div className="addComment">
        <input type="text" className='Comment-input' placeholder='Add a comment'/>
        <div className='submitbtn'>
          <div className="cancelcomment">Cancel</div>
          <div className="cancelcomment">Comment</div>

        </div>
       </div>
       </div>

       <div className="othersComment">
        <div className="selfcomment">
        <img className="selfcommentProfile" src="https://www.profilepicture.ai/styles/paranoia_agent.webp" alt="" />
         <div className="othersComment-sec">
          <div className="othersComment-secHeader">
            <div className="channelName">UserName</div>
            <div className="channelTiming">2025-07-29</div>
            </div>
            <div className="otherscommentsection">
              This is the cool Web App Project
            </div>
         </div>
        </div>

              <div className="selfcomment">
        <img className="selfcommentProfile" src="https://www.profilepicture.ai/styles/paranoia_agent.webp" alt="" />
         <div className="othersComment-sec">
          <div className="othersComment-secHeader">
            <div className="channelName">UserName</div>
            <div className="channelTiming">2025-07-29</div>
            </div>
            <div className="otherscommentsection">
              This is the cool Web App Project
            </div>
         </div>
        </div>

                <div className="selfcomment">
        <img className="selfcommentProfile" src="https://www.profilepicture.ai/styles/paranoia_agent.webp" alt="" />
         <div className="othersComment-sec">
          <div className="othersComment-secHeader">
            <div className="channelName">UserName</div>
            <div className="channelTiming">2025-07-29</div>
            </div>
            <div className="otherscommentsection">
              This is the cool Web App Project
            </div>
         </div>
        </div>
                <div className="selfcomment">
        <img className="selfcommentProfile" src="https://www.profilepicture.ai/styles/paranoia_agent.webp" alt="" />
         <div className="othersComment-sec">
          <div className="othersComment-secHeader">
            <div className="channelName">UserName</div>
            <div className="channelTiming">2025-07-29</div>
            </div>
            <div className="otherscommentsection">
              This is the cool Web App Project
            </div>
         </div>
        </div>
       </div>

        </div>
      </div>

     <div className="videoSuggestions">
      <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>

    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>

    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>

    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>

    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>

    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>
    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>
    <div className="suggestionBlock">
        <div className="suggestion_thumbnail">
          <img src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp" className='Video_thumbnail' />
        </div>

        <div className="suggestionAbout">
          <div className="suggestionTitle">Complete MangoDb, Express,React,Node.js in 1 day #fullstackdevelopment #Internshala</div>
          <div className="suggestionview">Web-Development</div>
          <div className="suggestionview">123K views . 1 day ago</div>
          </div>
   </div>
     
     
     </div>
    </div>
  )
}

export default Video;
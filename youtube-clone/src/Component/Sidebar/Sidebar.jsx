
import React from 'react'
import'./Sidebar.css'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { MdRecentActors } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";

const Sidebar = ({sidebar}) => {
  return (
    <div   className={sidebar?"home-sidebar":"homeSideNavbarHide"}>
      {/*--------Sidebar Top------------ */}
      <div className="home-sidebartop">
        <div className={`home-sidebartopOption`}>
           <IoMdHome />
           <div className='home-sidebartopOptionTitle'>Home</div>
        </div>
        <div className={`home-sidebartopOption`}>
           <SiYoutubeshorts />
           <div className='home-sidebartopOptionTitle'>Shorts</div>
        </div>
        <div className={`home-sidebartopOption`}>
          <MdSubscriptions />
           <div className='home-sidebartopOptionTitle'>Subscriptions</div>
        </div>

      </div>
      {/**-------Sidebar Middle--------- */}

      <div className="home-sidebarmiddle">

        <div className={`home-sidebartopOption`}>
          <div className='home-sidebartopOptionTitle'>You</div>
          <FaChevronRight />
          </div>

          <div className={`home-sidebartopOption`}>
         <MdRecentActors />
           <div className='home-sidebartopOptionTitle'>Your Channel</div>
        </div>

        <div className={`home-sidebartopOption`}>
         <LuHistory />
           <div className='home-sidebartopOptionTitle'>History</div>
        </div> 

        <div className={`home-sidebartopOption`}>
         <MdOutlinePlaylistPlay />
           <div className='home-sidebartopOptionTitle'>Playlists</div>
        </div>

        <div className={`home-sidebartopOption`}>
         <MdOndemandVideo />
           <div className='home-sidebartopOptionTitle'>Your videos</div>
        </div>

        <div className={`home-sidebartopOption`}>
         <AiOutlineLike  />
           <div className='home-sidebartopOptionTitle'>Liked videos</div>
        </div>

        <div className={`home-sidebartopOption`}>
         <MdOutlineWatchLater />
           <div className='home-sidebartopOptionTitle'>Watch Later</div>
        </div>
        
      </div>
      {/** ------------sidebar last------------- */}
      <div className="home-sidebarmiddle">
        <div className="home-sidebartopOption">
          <div className="home-sidebartopOptionTitleheader">Subscriptions</div>
        </div>

        <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://icon2.cleanpng.com/20180412/bpe/avu1kqx9v.webp" alt="logo" />
          <div className="home-sidebartopOptionTitle">Aaj Tak</div>
        </div>

        <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lYL03AcrqMAgvXOVdxygydHCr0U3i5bglA&s" alt="logo" />
          <div className="home-sidebartopOptionTitle">InternShala</div>
        </div>

        <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png" alt="logo" />
          <div className="home-sidebartopOptionTitle">United Nation</div>
        </div>

        <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://seekvectors.com/files/download/indiatoday-01.png" alt="logo" />
          <div className="home-sidebartopOptionTitle">India Today</div>
        </div>

        <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://i.pinimg.com/736x/94/7e/40/947e405ff7b832e61e4c1de5913f51a3.jpg" alt="logo" />
          <div className="home-sidebartopOptionTitle">NDTV India</div>
        </div>

        <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2lYL03AcrqMAgvXOVdxygydHCr0U3i5bglA&s" alt="logo" />
          <div className="home-sidebartopOptionTitle">InternShala Internships</div>
        </div>

         <div className="home-sidebartopOption">
          <img className='sidebar-img'  src="https://seekvectors.com/files/download/indiatoday-01.png" alt="logo" />
          <div className="home-sidebartopOptionTitle">India Today</div>
        </div>


          
      </div>
    </div>
  )
}

export default Sidebar
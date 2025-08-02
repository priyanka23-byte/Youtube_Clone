import React from "react";
import "./Homepage.css";

const Homepage = ({ sidebar }) => {
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

  return (
    <div className={sidebar ? "homepage" : "fullhomepage"}>
      <div className={sidebar ? "homepage-option" : "fullhomepage-option"}>
        {options.map((item, index) => (
          <div key={index} className="homepage-list">
            {item}
          </div>
        ))}
      </div>

      <div className={sidebar ? "home_mainpage":"mainpageWithoutSidebar"}>


        <div className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src="https://dummyimage.com/1280x720/cccccc/000000&text=Thumbnail"
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">Learn React in 20 Minutes</h3>
              <p className="videoChannel">CodeBiee</p>
              <p className="videoStats">200K views • 2 days ago</p>
            </div>
          </div>
        </div>
        <div className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src="https://dummyimage.com/1280x720/cccccc/000000&text=Thumbnail"
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">Learn React in 20 Minutes</h3>
              <p className="videoChannel">CodeBiee</p>
              <p className="videoStats">200K views • 2 days ago</p>
            </div>
          </div>
        </div>

        <div className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src="https://dummyimage.com/1280x720/cccccc/000000&text=Thumbnail"
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">Learn React in 20 Minutes</h3>
              <p className="videoChannel">CodeBiee</p>
              <p className="videoStats">200K views • 2 days ago</p>
            </div>
          </div>
        </div>

        <div className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src="https://dummyimage.com/1280x720/cccccc/000000&text=Thumbnail"
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">Learn React in 20 Minutes</h3>
              <p className="videoChannel">CodeBiee</p>
              <p className="videoStats">200K views • 2 days ago</p>
            </div>
          </div>
        </div>

        <div className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src="https://dummyimage.com/1280x720/cccccc/000000&text=Thumbnail"
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">Learn React in 20 Minutes</h3>
              <p className="videoChannel">CodeBiee</p>
              <p className="videoStats">200K views • 2 days ago</p>
            </div>
          </div>
        </div>

        <div className="youtube_videos">
          <div className="youtube_thumbnail">
            <img
              src="https://dummyimage.com/1280x720/cccccc/000000&text=Thumbnail"
              alt="thumbnail"
              className="youtube_thumbnailpic"
            />
            <div className="thumbnail_time">20:00</div>
          </div>

          <div className="titlebox">
            <div className="titleProfile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="userpic"
                className="titleprofilePic"
              />
            </div>
            <div className="videoDetails">
              <h3 className="videoTitle">Learn React in 20 Minutes</h3>
              <p className="videoChannel">CodeBiee</p>
              <p className="videoStats">200K views • 2 days ago</p>
            </div>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default Homepage;

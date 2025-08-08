import React, { useState, useEffect } from "react";
import "./Video.css";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Video = () => {
  //state for the new comment input message
  const [message, setMessage] = useState("");
  //state to hold video fetched from api
  const [data, setData] = useState(null);
  //state to hold video url 
  const [videoUrl, setVideoUrl] = useState("");
  const { id } = useParams();
  //to sto all comments
  const [comments, setComments] = useState([]);
// fetcbing video details by video id
  const fetchVideoById = async () => {
    await axios
      .get(`http://localhost:4000/api/getVideoById/${id}`,{ withCredentials: true})
      .then((response) => {
        console.log(response.data.video);
        setData(response.data.video);
        setVideoUrl(response?.data?.video?.videoLink);
      })
      .catch((err) => {
        console.log(err);
      });
  };
// fetching comments
  const getCommentByVideoId = async () => {
    await axios
      .get(`http://localhost:4000/commentApi/comment/${id}`)
      .then((response) => {
        console.log(response);
        setComments(response.data.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, []);

  //handle new comment
  const handleComment = async()=>{
    const body ={
      "message":message,
      "video":id
    }
    await axios.post('http://localhost:4000/commentApi/comment',body, {withCredentials: true}).then((resp)=>{
      console.log(resp);
      const newComment  = resp.data.comment;
      setComments([newComment,...comments]);
      setMessage("")
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="video">
      <div className="videoPost">
        <div className="videoYoutube">
          {data && (
            <video width="400" controls autoPlay className="video-foryou">
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="videoAbout">
          <div className="videoTitle">{data?.title}</div>
          <div className="profileBlock">
            <div className="profileBlock-left">
              <Link
                to={`/user/${data?.user._id}`}
                className="profileBlock-imgLeft"
              >
                <img
                  className="profileBlock-Image"
                  src={data?.user?.profilePic}
                />
              </Link>
              <div className="videoAbout">
                <div className="videoUser">{data?.user?.channelName}</div>
                <div className="videoDate">
                  {data?.user?.createdAt.slice(0, 10)}
                </div>
              </div>

              <div className="subscribeBtn">Subscribe</div>
            </div>

            <div className="profileLikeBlock">
              <div className="likeBtn">
                <MdOutlineThumbUp />
                <div className="likecount">{data?.like}</div>
              </div>
              <div className="btn-divider"></div>

              <div className="likeBtn">
                <MdOutlineThumbDown />
              </div>
            </div>
          </div>

          <div className="About-sec">
            <div>{data?.user?.createdAt.slice(0, 10)}</div>
            <div>{data?.description}</div>
          </div>

          <div className="comments-sec">
            <div className="comments-sec_Title">{comments.length} Comments</div>
          </div>

          <div className="selfcomment">
            <img
              className="selfcommentProfile"
              src="https://www.profilepicture.ai/styles/paranoia_agent.webp"
              alt=""
            />
            <div className="addComment">
              <input
                type="text"
                className="Comment-input"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Add a comment"
              />

              <div className="submitbtn">
                <div className="cancelcomment">Cancel</div>
                <div className="cancelcomment"onClick={handleComment}>Comment</div>
              </div>
            </div>
          </div>

          <div className="othersComment">
            {comments.map((item, index) => {
              return (
                <div className="selfcomment">
                  <img
                    className="selfcommentProfile"
                    src="http://res.cloudinary.com/dg4wgozjr/image/upload/v1754570472/zl5mixhsc…"
                    
                  />
                  <div className="othersComment-sec">
                    <div className="othersComment-secHeader">
                      <div className="channelName">Cody</div>
                      <div className="channelTiming">2025-07-</div>
                    </div>
                    <div className="otherscommentsection">
                      This is a Nice video.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="videoSuggestions">
        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>

        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>

        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>

        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>

        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>

        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>
        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>
        <div className="suggestionBlock">
          <div className="suggestion_thumbnail">
            <img
              src="https://cdn.textstudio.com/output/studio/template/preview/stamped/7/q/n/e/al6cz1enq7.webp"
              className="Video_thumbnail"
            />
          </div>

          <div className="suggestionAbout">
            <div className="suggestionTitle">
              Complete MangoDb, Express,React,Node.js in 1 day
              #fullstackdevelopment #Internshala
            </div>
            <div className="suggestionview">Web-Development</div>
            <div className="suggestionview">123K views . 1 day ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

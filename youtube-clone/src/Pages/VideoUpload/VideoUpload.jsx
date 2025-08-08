
import React ,{useState,useEffect}from 'react'
import './VideoUpload.css';
import { FaYoutube } from "react-icons/fa";
import {Link,useNavigate} from'react-router-dom';
import axios from 'axios';
import { LuLoaderCircle } from "react-icons/lu";

const VideoUpload = () => {

// State to hold all input fields for video upload 
const [inputField, setInputField] =useState({"title":"","description":"","videoLink":"","thumbnail":"","videoType":""})
const [loader, setLoader] =useState(false);
const navigate = useNavigate();
//update state when input field cahnges
const  handleOnChangeInput=(event,name)=>{
    setInputField({
      ...inputField,[name]:event.target.value
     })
   
  }
//upload image or video to cloudinary
  const uploadImage= async(e,  type)=>{
    setLoader(true)
    console.log("Uploading");
const files = e.target.files;

const data = new FormData();
data.append('file',files[0]);
data.append('upload_preset','youtube-clone');
data.append('cloud_name','dg4wgozjr')
try{
  const response = await axios.post(`https://api.cloudinary.com/v1_1/dg4wgozjr/${type}/upload`,data);
  const url =response.data.url;
  setLoader(false)
  let val = type==="image"?"thumbnail":"videoLink";
  setInputField({
      ...inputField,[val]:url
     })
  

}catch(err){
    setLoader(false)
    console.log(err);
}
}

console.log(inputField);

useEffect(()=>{
  let isLogin = localStorage.getItem("userId");
  if(isLogin===null){
   navigate('/')
  }
},[])
//handle submiitthing video upload to backend
const handleSubmitFunc = async()=>{
  await axios.post("http://localhost:4000/api/video",inputField,{ withCredentials: true}).then((res)=>{
    console.log(res);
  }).catch(err=>{
    console.log(err);
  })
}

  return (
    <div className='Video-upload'>
        <div className="uploadBox">
            <div className="uploadTitle">
               <FaYoutube  style={{ color: "red", fontSize: "54px" }}/>
               Upload Video
            </div>

            <div className="uploadForm">
                <input type="text" placeholder='Title of the Video' className="upload-Form-Input" value={inputField.title} onChange={(e)=>{handleOnChangeInput(e,"title")}}/>
                <input type="text" placeholder='Description' className="upload-Form-Input"value={inputField.description} onChange={(e)=>{handleOnChangeInput(e,"description")}}/>
                <input type="text" placeholder='Category' className="upload-Form-Input" value={inputField.videoType} onChange={(e)=>{handleOnChangeInput(e,"videoType")}}/>

                <div>Thumbnail <input type="file"  accept="image/*" onChange={(e)=>uploadImage(e, "image")}/></div>
                <div>Video <input type="file"  accept="video/mp4 , video/webm, video/* "onChange={(e)=>uploadImage(e, "video")}/></div>
               {
                 loader && <LuLoaderCircle  className='loader'/>
               }
            </div>
            <div className="uploadBtns">
                <div className="uploadbtn-form" onClick={handleSubmitFunc}>Upload</div>
                <Link to='/' className="uploadbtn-form">Home</Link>


            </div>

        </div>
    </div>
  )
}

export default VideoUpload
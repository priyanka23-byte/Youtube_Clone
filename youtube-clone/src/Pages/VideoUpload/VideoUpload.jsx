
import React ,{useState}from 'react'
import './VideoUpload.css';
import { FaYoutube } from "react-icons/fa";
import {Link} from'react-router-dom';

const VideoUpload = () => {

const [inputField, setInputField] =useState({"title":"","description":"","videolink":"","thumbnail":"","videoType":""})

const  handleOnChangeInput=(event,name)=>{
    setInputField({
      ...inputField,[name]:event.target.value
     })
   
  }
  console.log(inputField);

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

                <div>Thumbnail <input type="file"  accept="image/*"/></div>
                <div>Video <input type="file"  accept="video/mp4"/></div>
            </div>
            <div className="uploadBtns">
                <div className="uploadbtn-form">Upload</div>
                <Link to='/' className="uploadbtn-form">Home</Link>


            </div>

        </div>
    </div>
  )
}

export default VideoUpload
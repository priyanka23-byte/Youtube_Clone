
import Video from '../Modals/video.modal.js'; 


//to upload new video
export const uploadVideo = async (req,res)=>{
     try{
        //extract video details from request body
       const {title, description, videoLink , videoType , thumbnail}= req.body;
      // creating new video document,relating it to loggedin useer
       const videoUpload = new Video({user:req.user._id, title, description, videoLink, videoType, thumbnail});
       await videoUpload.save();
  // response
       res.status(201).json({success:"true", videoUpload});

     }catch(error){
        res.status(500).json({error: 'Server error'});
     }
     
}
//to get all videos
export const  getAllVideo = async (req,res) =>{
    try{
        // Find all videos and populate user-related fields
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
        
        res.status(201).json({success:"true", "videos": videos});
    }catch(error){
        res.status(500).json({error: 'Server error'});
     }
    
}
//to get a single video by its id
export const getVideoById = async (req, res)=>{

    try{  
        let {id}= req.params;
        const video = await Video.findById(id).populate('user','channelName profilePic userName createdAt');
        res.status(201).json({success:"true","video":video});


    }catch(error){
        res.status(500).json({error: 'Server error'});
     }
    
}
//to get all video uploaded by user
export const getAllVideoByUserID= async(req,res)=>{
    try{
     let {userId} = req.params;
     const video = await Video.find({user:userId}).populate('user','channelName profilePic userName createdAt');;
     res.status(201).json({success:"true","video":video});
    }catch(error){
        res.status(500).json({error: 'Server error'});
     }
}
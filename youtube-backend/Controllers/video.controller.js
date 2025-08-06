
import Video from '../Modals/video.modal.js'; 



export const uploadVideo = async (req,res)=>{
     try{
       const {title, description, videoLink , videoType , thumbnail}= req.body;
      
       const videoUpload = new Video({user:req.user._id, title, description, videoLink, videoType, thumbnail});
       await videoUpload.save();

       res.status(201).json({success:"true", videoUpload});

     }catch(error){
        res.status(500).json({error: 'Server error'});
     }
     
}

export const  getAllVideo = async (req,res) =>{
    try{
        const videos = await Video.find().populate('user','channelName profilePic userName createdAt');
        
        res.status(201).json({success:"true", "videos": videos});
    }catch(error){
        res.status(500).json({error: 'Server error'});
     }
    
}
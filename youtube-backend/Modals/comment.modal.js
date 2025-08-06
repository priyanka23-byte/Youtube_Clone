const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
      },
      video: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'video',
        required:true
      },
      message:{
        type:String,
        required:true
      }
},{timestamps:true})

const commentModal = mongoose.model('comment',commentSchema);

 export default commentModal;
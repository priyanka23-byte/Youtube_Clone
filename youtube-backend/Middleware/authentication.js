
import jwt from "jsonwebtoken";
import User from '../Modals/user.modal.js'; 

// Middleware to authenticate user by verifying JWT token in cookies
const auth = async(req, res, next) =>{
    //get token from cookies
    const token = req.cookies.token;
    // if token is not present , deny access
    if(!token){
        return res.status (401).json({ error: "No token, authentication denied"});
    } else{
            try{
               const decode = jwt.verify(token,"Its_my_secret_key");
               req.user = await User.findById(decode.userId).select('-password');
              //next middelware
              next();

           }catch(err){
               res.status(401).json({error:"Token is not Valid"});
        }
    }
}
export default auth;
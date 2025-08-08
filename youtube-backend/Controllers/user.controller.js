import User from '../Modals/user.modal.js'; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const cookieOptions={
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
};


//signUp
export const signUp = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;
    const isExist = await User.findOne({ userName });

    if (isExist) {
      res.status(400).json({ error: "Username Already exist please try with another Username" });
    } else {
      let updatedPass = await bcrypt.hash(password, 10);
      const user = new User({ channelName, userName, about, profilePic, password: updatedPass });
      await user.save();
      res.status(201).json({ message: "User registered successfully", success: "yes", data: user });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
  //Login
export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (user && await bcrypt.compare(password, user.password)) {

      const token = jwt.sign({ userId: user._id }, "Its_my_secret_key");
      res.cookie('token', token, cookieOptions);
       
      res.json({ message: 'Logged in successfully', success: "true", token, user }); 

    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};



//logout function
export const logout =  async(req,res) =>{
  res.clearCookie('token',cookieOptions).json({message:"Logged out successfully"});
}


import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup= async(req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        // password private rhe islie use kiya gya bcryptjs ka 
        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser=new User({
            fullname: fullname,
            email: email,
            password: hashPassword,  
        });
        await createUser.save()
        res.status(201).json({message:"User created successfully",
            user:{
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,
            }
        })
    }catch(error){
        console.log("Error: "+ error.message)
        res.status(500).json({message:"Internal server error"})
    }
};
 
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const foundUser = await User.findOne({ email });
        if (!foundUser) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, foundUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Successful login
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: foundUser._id,
                fullname: foundUser.fullname,
                email: foundUser.email,
            },
        });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

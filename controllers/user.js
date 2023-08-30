import { User } from "../models/user.js";

export const getAllUsers = async(req,res)=>{

    const users = await User.find({});
 
 //    console.log(req.query);
     res.json({
         success:true,
         users
     })
 
 }

 export const register = async(req,res)=>{

    const {name,email,password} = req.body;

     await User.create({
       name,
       email,
       password
    })

    res.status(201).cookie("temp","lol").json({
        success:true,
        message:"Registered successfully"
    })
}

export const special = (req,res)=>{
    res.json({
        success:true,
        message:"just joking"
    })
}

export const getUserDetails =  async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching user",
            error: error.message
        });
    }
}
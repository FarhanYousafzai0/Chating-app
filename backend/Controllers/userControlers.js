import User from "../Models/authModel.js"

export const SideBarUsers = async(req,res)=>{

    try {
        const userId = req.user._id


        const filterUsers = await User.find().select('-password');
        
        res.status(200).json(filterUsers)

    } catch (error) {
        res.status(400).json({error:"Internal Server Error!"})
    }
}
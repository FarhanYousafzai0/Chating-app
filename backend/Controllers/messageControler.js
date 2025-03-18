import mongoose from "mongoose";  // Add this for ObjectId validation
import Conversation from "../Models/conversatonModel.js";
import Message from "../Models/messageModel.js";

export const postMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Validation
        if (!message || !receiverId) {
            return res.status(400).json({ error: "Message and receiver ID are required!" });
        }

        if (!mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ error: "Invalid receiver ID!" });
        }

        // Find or create conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [receiverId, senderId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [receiverId, senderId],
                messages: []  // Initialize messages array
            });
        }

        // Create and save the new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        return res.status(200).json(newMessage);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error!" });
    }
};



export const getMessages = async(req,res)=>{
    try {
        const {id :userToChatId} = req.params;
        const senderId = req.user._id;


        let conversation = await Conversation.findOne({
            participants:{$all : [senderId,userToChatId]}
        }).populate('messages')

        const messages = conversation.messages;
        if(!conversation){
            res.status(400).json([])
        }

        res.status(200).json(messages)


    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error!" });
    }
}
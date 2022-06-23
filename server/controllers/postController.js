import PostModel from "../models/postModel.js"

export const getPosts = async (req, res) => {
    try {
        const postModel = await PostModel.find();
        res.status(200).json(postModel)
    }
    
    catch (error) {
        res.status(404).json({message: error.message})
    }
}
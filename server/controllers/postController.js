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

export const createPost = async (req, res) => {
    const post = req.body;

    try {
        const newPost = await PostModel.create({
            ...post, 
            id: req.userId, 
            createdAt: new Date().toISOString()
        })
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
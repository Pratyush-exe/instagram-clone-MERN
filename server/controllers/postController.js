import PostModel from "../models/postModel.js"

export const getPosts = async (req, res) => {
    try {
        const post = await PostModel.find();
        res.status(200).json(post)
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

export const likePost = async (req, res) => {
    const {id, userName, dislike} = req.body
    // console.log(req.body)
    try{
        const post = await PostModel.findOne({_id: id});
        // console.log(post)
        let likes
        if(dislike) {
            likes = post["likes"].filter((value, index, arr) => {
                return value != userName
            })
            console.log("if", likes)
        } else {
            post["likes"].push(userName)
            likes = post["likes"]
            console.log(likes)
        }
        let updatedPost = await PostModel.findOneAndUpdate(
            {_id: id},
            {likes: likes}
        ) 

        res.status(201).json({"result": updatedPost})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}
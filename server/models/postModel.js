import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    creator: String,
    location: String,
    selectedFile: String,
    caption: String,
    tags: [String],
    createAt: {
        type: Date,
        default: new Date()
    },
    comments: {
        type: [String],
        default: []
    },    
    likes: {
        type: [String],
        default: []
    }
})

const postModel = mongoose.model('postModel', postSchema);

export default postModel;
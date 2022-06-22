import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    userName: String,
    defaultPicture: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    followers: { type: [String], default: [] },
    following: { type: [String], default: [] }
})

const userModel = mongoose.model('userModel', userSchema);

export default userModel;
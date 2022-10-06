import UserModel from "../models/userModel.js"

export const signInUser = async (req, res) => {
    const {email, userName, password} = req.body
    try {
        if (email != "none") {
            const existingUser = await UserModel.findOne({email});
            if(!existingUser) 
                return res.status(404).json({result: "This email ID doesn't belong to an account. Please check your email and try again."})
            else 
                return res.status(200).json({result: existingUser})
        }
        const existingUser = await UserModel.findOne({userName})
        if(!existingUser) 
            return res.status(404).json({result: "The username you entered doesn't belong to an account. Please check your username and try again."})
        if(password !== existingUser.password)
            return res.status(404).json({result: 'Sorry, your password was incorrect. Please double-check your password.'})
        else
            return res.status(200).json({result: existingUser})

    } catch (error) {
        console.log(error)
        return res.status(500).json({result: 'Server error. Please try again later.'})
    }
}

export const signUpUser = async (req, res) => {
    const {clientId, userName, password, name, defaultPicture, email} = req.body
    try {
        const existingUserEmail = await UserModel.findOne({email});
        if(existingUserEmail) return res.status(404).json('A user with that email ID already exists.')
        const existingUser = await UserModel.findOne({userName});
        if(existingUser) return res.status(404).json('A user with that username already exists.')
        const result = await UserModel.create({
            clientId: clientId, 
            userName: userName, 
            password: password, 
            name: name, 
            defaultPicture: defaultPicture,
            email: email
        })
        res.status(200).json({result})

    } catch (error) {
        console.log(error)
        return res.status(500).json('Server error. Please try again later.')
    }
}
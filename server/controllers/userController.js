import UserModel from "../models/userModel.js"

export const signInUser = async (req, res) => {
    const {email, userName, password} = req.body
    try {
        if (email != "none") {
            const existingUser = await UserModel.findOne({email});
            if(!existingUser) return res.status(404).json({result: 'user does not exist with this google account'})
            else return res.status(200).json({result: existingUser})
        }
        const existingUser = await UserModel.findOne({userName});
        if(!existingUser || password !== existingUser.password) 
            return res.status(404).json({result: 'invalid creds'})
        else
            return res.status(200).json({result: existingUser})

    } catch (error) {
        console.log(error)
        return res.status(500).json({result: 'Error occured'})
    }
}

export const signUpUser = async (req, res) => {
    const {clientId, userName, password, name, defaultPicture, email} = req.body
    try {
        const existingUser = await UserModel.findOne({userName});
        if(existingUser) return res.status(404).json('user already exist')
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
        return res.status(500).json('Error occured')
    }
}
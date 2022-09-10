import UserModel from "../models/userModel.js"

export const signInUser = async (req, res) => {
    const {clientId, userName, password} = req.body
    try {
        if (clientId != "none") {
            const existingUser = await UserModel.findOne({clientId});
            if(!existingUser) return res.status(404).json('user does not exist with this google account')

            res.status(200).json({result: existingUser})
        }
        const existingUser = await UserModel.findOne({userName});
        if(!existingUser) return res.status(404).json('user does not exist')
        const isPasswordCorrect = password === existingUser.password
        if(!isPasswordCorrect) return res.status(404).json('invalid credentials')

        res.status(200).json({result: existingUser})

    } catch (error) {
        console.log(error)
        res.status(500).json('Error occured')
    }
}

export const signUpUser = async (req, res) => {
    const {clientId, userName, password, name, defaultPicture} = req.body
    try {
        if(clientId !== "none") {
            const existingUser = await User.findOne({clientId});
            if(existingUser) return res.status(404).json('user already exist')
            const result = await User.create({
                clientId: clientId, 
                userName: userName, 
                password: password, 
                name: name, 
                defaultPicture: defaultPicture})
            res.status(200).json({result, token})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json('Error occured')
    }
}
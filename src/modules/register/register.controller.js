import { User } from "../../../database/models/user.model.js"

export const register = async (req, res) => {

    
    res.render('register.ejs',{error:req.query.error,session: null})
}

export const handleRegister = async (req, res) => {
    let isUerExist = await User.findOne({ email: req.body.email })
    if (isUerExist) return res.redirect('/register?error=email is already exist')
    await User.insertMany(req.body)

    res.redirect('/login')
}
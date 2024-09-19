
export const home=async (req,res)=>{
    res.render('home.ejs',{session: req.session})
}
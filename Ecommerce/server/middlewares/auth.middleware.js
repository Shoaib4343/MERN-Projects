const jwt = require("jsonwebtoken")
const userModel = require("../modules/user.model")

const signInRequire = async(req,res,next)=>{
    try {
       const decrypt = jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
        req.user = decrypt;
        next();
        
    } catch (error) {
        console.log('errors : ',error.message)
    }
}

const isAdmin = async(req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).json({
                sucess:false,
                message: "UnAuthurize Access"
            })
        }else{
            next()
        }
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {signInRequire,isAdmin}
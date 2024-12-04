const userModel = require("../modules/user.model");
const { hashPassword, comparePassword } = require("../utils/auth.utils");
const jwt = require("jsonwebtoken")

const register = async (req,res)=>{
   try{
    const {name,email,password,address,phone} = req.body;
    // Checking user
    const existingUser = await userModel.findOne({email})
    // if exist
    if(existingUser) return res.status(409).json({message:"User Already Exist Please Login"})

    // register user
    const hashedPassword = await hashPassword(password);

    // save password
    const user = await new userModel({
        name,
        password: hashedPassword,
        email,
        address,
        phone,
    }).save();

    res.status(201).json({message:"user created successfully",success:true,user})


    
   }catch(err){
    console.log("err : ",err.message)
    res.status(500).json({message:"error while register"})
   }
}


const login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        // find user 
        const user = await userModel.findOne({email})
        if(!user) return res.status(500).json({message:'Accout is not created please login first',success:false})
        
        // check password compare
        const comparePasswordCheck = await comparePassword(password,user.password)
        if(!comparePasswordCheck)  return res.status(500).json({message:'password is not valid',success:false})

        // token
        const token = jwt.sign({_id:user._id},process.env.SECRET_KEY)

        return res.status(200).json({
            message:'login successfully',
            success:true,
            token,
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
           }
        })
        
        
    } catch (error) {
        console.log("login error",error.message)
        res.status(500).json({message:"Logoin error",error:error.message,success:false})
    }
}


const test = (req,res)=>{
    res.send('test is working')
}

module.exports = {register, login,test}
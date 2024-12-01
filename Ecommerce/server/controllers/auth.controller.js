const userModel = require("../modules/user.model");
const { hashPassword } = require("../utils/auth.utils");

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

module.exports = {register}
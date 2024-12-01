const bcrypt = require("bcrypt");

 const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log('hashe password error : ',error.message);
    throw new Error('Password hashing failed');
  }
};

 const comparePassword = async (password,hashedPassword)=>{
    try {
       return await bcrypt.compare(password,hashedPassword)
        
    } catch (error) {
        console.log('compare hashed password error : ',error.message)
        throw new Error('Password comparison failed');
    }
}


module.exports = {hashPassword,comparePassword}
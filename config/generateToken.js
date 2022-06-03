const jwt = require('jsonwebtoken')
const generateToken =(id) =>{

    return jwt.sign({userId:id},process.env.jwtSecretKey,{expiresIn:"24h"})


}

module.exports= generateToken
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  console.log(req.headers)
  if(!req.headers.authorization)
  return res.status(401).json({ error: "authorization errorr" });
  const token = req.headers.authorization.split(" ")[1];
  

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.jwtSecretKey);
    req.user= await User.findById(decodedToken.userId).select("-password")
    console.log(req.user)

  } catch (error) {
    return res.status(401).json({ error: "un able to verify" });
  }
  if(!decodedToken)
  {
    return res.status(401).json({ error: "authorization error" });
  }

  next();
};

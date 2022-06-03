//  npm install --save  express  helmet compression dotenv  cors mongoose
//npm install -d nodemon

const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var helmet = require("helmet");
var compression = require("compression");
const { chats } = require("./data/data");
const userRouter = require("./2-routes/UserRoutes");
const chatController = require('./2-routes/chatRoutes')
const  error4040  = require("./middleware/Error404");
require("dotenv").config();

const app = express();
app.use(express.json())
app.use(cors());
app.use(compression());
//app.use(helmet());


const URI_LINK = process.env.MONGODB_CONNECTION_LINK;


const port = process.env.PORT || 8080;


app.use("/api/user",userRouter)

app.use("/",error4040)


mongoose
  .connect(URI_LINK)
  .then((result) => {
    console.log('\x1b[36m', 'connected to mongo' ,'\x1b[0m');

    
    
app.listen(port, () => {
  console.log("connected to " + port);
});
  })
  .catch((err) => {
    console.log(err);
  });

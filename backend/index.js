const express = require("express");
const cors = require("cors");
require('dotenv').config()
const authRoutes = require("./routes/user.js")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const { Server }  = require("socket.io");

// express app creation 
const app = express();

const http = require("http")
const server = http.createServer(app)
const io = new Server(server , {
  cors:{
    origin:"http://localhost:3000",
    methods:["GET" , "POST"],
}
})

// socket io 
io.on('connection', (socket) => {
  console.log('a user connected' , socket.id);
});


// app using packages
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth" , authRoutes)

// database connection 
mongoose.connect('mongodb://127.0.0.1:27017/codenestDb')
    .then(()=>console.log("successfully connected to database"))
    .catch((e)=>console.log(e))

// post method to run codes

// app.post("/run", async (req, res) => {
//   try {
//     const { language = "py", code } = await req.body;
//     const filePath = await generateFile(language, code);
//     console.log(typeof language, typeof code);
//     let output;
//     if (language === "py") {
//       output = await execute(filePath);
//     } else if (language == "java") {
//       output = await execute(filePath);
//     }

//     console.log(output);
//     return res.status(200).json({ language, code, output });
//   } catch (error) {
//     res.status(500).json({ message: "internal server failure" });
//   }
// });

// Socket.io


// socket io config 




server.listen(4000, () => console.log("listining to port", 4000));

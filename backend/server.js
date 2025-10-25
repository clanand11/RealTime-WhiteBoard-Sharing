const express = require("express");
const app = express(); 

const server = require("http").createServer(app);
const  {Server} = require("socket.io");

const io = new Server(server);

app.get("/", (req,res)=>{
    res.send("Hai Helllo");
});

let roomIdGlobal, imgURLGlobal;

io.on("connection", (socket) => {
    socket.on("userJoined", (data) => {
        const {name, userId, roomId, host, presenter} = data;
        roomIGlobal = roomId;
        socket.join(roomId);
        socket.emit("userIsJoined", {success:true});
        socket.broadcast.to(roomId).emit("whiteBoardDataResponse", {
            imgURL : imgURLGlobal,
        })
    });
    socket.on("whiteboardData", (data)=>{
        imgURLGlobal = data;
        socket.broadcast.to(roomId).emit("whiteBoardDataResponse", {
            imgURL : data,
        })
    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
});
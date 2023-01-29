import { Server } from "socket.io";

// create io
const io = new Server({
    cors:{
        origin:"http://localhost:3000"
    }
});
let firstClient = true;
const allusers =[]
// a user connected
io.on("connection", (socket) => {
allusers.push("a")
    if(firstClient){
        socket.emit('firstClientConnected');
        firstClient = false;
    }
io.emit("firstUser",io.engine.clientsCount)
// the student changed the code and the mentor gets it
  socket.on("newCode",(code)=>{
   io.emit("getCode",{
    code,
   })  
  })
//   a user disconnected
  socket.on("disconnect", () =>{   
  })
});

io.listen(5000);
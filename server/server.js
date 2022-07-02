const Server=require("socket.io")

const io=Server(3232,{
    cors:{
        origin:'http://127.0.0.1:5500/client/',
        credentials: true
    },
    cors:{
        origin:'http://127.0.0.1:5500',
        credentials: true
    }
})

io.on("connection",(socket)=>{

    console.log("Connected!")

    socket.on("join room",(room)=>{
        socket.join(room)
    })
    
    socket.on("message to server",(message,room)=>{

              
              socket.to(room).emit("message from server",message)
    })

    socket.on("without room message to server",(message)=>{
        socket.emit()
    })

})
const socket=io("http://localhost:3232")

const messageBox=document.getElementById('messageBox')
const roomBox=document.getElementById('roomBox')
const joinRoom=document.getElementById('joinRoom')
const sendMessage=document.getElementById('sendMessage')
const messagesInnerContainer=document.getElementById('messagesInnerContainer')

let room =""

joinRoom.onclick= function (){

     room=roomBox.value.toString()

     

     if(room!=""){
        
        socket.emit("join room",room)

     }


     
}

sendMessage.onclick=function(){

       const message=messageBox.value.toString()

       if(message!=""){
            if(room!=""){

                socket.emit("message to server",message,room)
               
                attachMyMessage(message)
                
}
            else{
                socket.emit("without room message to server",message)
                attachMyMessage(message)
            }
       }

}

socket.on("message from server",(message)=>{
            console.log(message)
            attachRecievedMessage(message)              
})

function attachMyMessage(message){

                const div=document.createElement('div')
                const h1=document.createElement('h1')
                h1.appendChild(document.createTextNode(message))
                div.appendChild(h1)
                messagesInnerContainer.appendChild(div)
}

function attachRecievedMessage(message){

    const div=document.createElement('div')
    const h2=document.createElement('h2')
    h2.appendChild(document.createTextNode(message))
    div.appendChild(h2)
    messagesInnerContainer.appendChild(div)

}

socket.emit("hello from client")
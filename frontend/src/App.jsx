import Forms from './Components/Forms/Forms'
import {Routes, Route} from 'react-router-dom'
import Room from './Pages/Room/Room'
import io from "socket.io-client"
import { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify'


const server = "http://localhost:5000";
const connectionOptions = {
  "force a new connection" : true,
  reconnectionAttempts : "Infinity",
  timeout: 10000,
  transports: ["websocket"]
}

const socket = io(server, connectionOptions);  

const App = () => {

  const [user,setUser] =useState(null);
  const [users,setUsers] =useState([]);

  useEffect(()=>{
      socket.on("userIsJoined", (data) => {
        if(data.success){
          console.log("userJoined");
          setUsers(data.users)
        }else{
          console.log("userJoined error")
        }
      })

      socket.on("allUsers", (data) => {
        setUsers(data);
      })

      socket.on("userJoinedMessageBroadcasted", (data) =>{
        toast.info(`${data} joined the room`);
      })

      socket.on("userLeftMessageBroadcasted", (data) =>{
        toast.warning(data);
      })

      return () => {
        socket.off("userJoinedMessageBroadcasted");
        socket.off("userLeftMessageBroadcasted"); 
        socket.off("allUsers");
      };

  }, [])

  const uuid = () => {
    let S4 = () => {
      return (((1+ Math.random()) * 1000 | 0)).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
  }

  return (
    <div className='container'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Forms uuid={uuid} socket={socket} setUser={setUser}/>}/>
        <Route path='/:roomId' element={<Room user={user} socket={socket}  users={users}/>} />
      </Routes>      
    </div>
  )
}

export default App

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateRoom = ({uuid, socket, setUser}) => {

  const [roomId, setRoomId] = useState(uuid());
  const [name, setName] = useState("");

  const navigate = useNavigate();


  const handleCreateRoom =(e) => {
    e.preventDefault();
    const roomData = {
      name, roomId, userId: uuid(), host: true, presenter: true
    } 
    setUser(roomData);
    navigate(`/${roomId}`);
    console.log(roomData);
    socket.emit("userJoined", roomData);
  }

  return (
    <div>
        <form className='form col-md-12 mt-5'>
          <div className="form-group">
            <input type="text" className='form-control my-2' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="input-group d-flex">
              <input type="text" className='form-control my-2' value={roomId} placeholder='Generate room code' disabled/>
            </div>
            <div className="input-group-append d-flex gap-1">
              <button className='btn btn-primary btn-sm' type='button'onClick={() => setRoomId(uuid())}> Generate</button>
              <button className="btn btn-outline-danger btn-sm" type='button'>Copy</button>
            </div>
          </div>
          <button type='submit' className='mt-4 btn-primary btn-block form-control'onClick={handleCreateRoom}>Generate</button>
        </form>
    </div>
  )
}

export default CreateRoom
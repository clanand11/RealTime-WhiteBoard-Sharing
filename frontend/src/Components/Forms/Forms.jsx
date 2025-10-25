import "./Forms.css";
import CreateRoom from './CreateRoom/createRoom';
import JoinRoom from "./JoinRoom/joinRoom";

const Form = ({uuid, socket, setUser}) => {
  return (
    <div className='row h-100 pt-5'>
      <div className="col-md-4 mt-5 form-box  p-5 border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className='text-primary fw-bold'>Create Room</h1>
        <CreateRoom uuid={uuid} socket={socket} setUser={setUser}/>
      </div>
      <div className="col-md-4 mt-5 form-box  p-5 border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className='text-primary fw-bold'>Join Room</h1>
        <JoinRoom socket={socket} setUser={setUser} uuid={uuid}/>
      </div>
    </div>
  );
};

export default Form;

import "./Forms.css";
import CreateRoom from './CreateRoom/CreateRoom';
import JoinRoom from "./JoinRoom/joinRoom";

const Form = () => {
  return (
    <div className='row h-100 pt-5'>
      <div className="col-md-4 mt-5 form-box  p-5 border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className='text-primary fw-bold'>Create Room</h1>
        <CreateRoom />
      </div>
      <div className="col-md-4 mt-5 form-box  p-5 border border-primary rounded-2 mx-auto d-flex flex-column align-items-center">
        <h1 className='text-primary fw-bold'>Join Room</h1>
        <JoinRoom />
      </div>
    </div>
  );
};

export default Form;

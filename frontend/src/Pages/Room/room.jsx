import { useRef, useState } from "react"
import "./Room.css"
import WhiteBoard from "../../Components/WhiteBoard/whiteBoard";

const Room = ({user, socket}) => {

    const canvasRef = useRef(null); 
    const cntxtRef = useRef(null); 

    const [tool,setTool] = useState("pencil"); 
    const [color,setColor] = useState("black"); 
    const [elements, setElements] = useState([]);
    const [history, setHistory] = useState([]);

    const handleClearCanvas = () => {
        const canvas = canvasRef.current;
        const cntxt = canvas.getContext("2d");
        cntxt.fillRect = "white";
        cntxt.clearRect(0,0,canvasRef.current.width,canvasRef.current.height);
        setElements([]);
    }

    const undo = () => {
        setHistory((prevHistory) => [...prevHistory, elements[elements.length - 1]]);
        setElements((prevElements) => prevElements.slice(0,prevElements.length -1));
        if(elements.length==0)  
            handleClearCanvas();
    }

    const redo = () => {
        setElements((prevElements) => [...prevElements, history[history.length - 1]]);
        setHistory((prevHistory) => prevHistory.slice(0,prevHistory.length-1));
    }

  return (
    <div className="row ">
        <h1 className="text-center py-5">White Board App <span className="text-primary"> [Users Online : 0]</span></h1>
        {
            user && user.presenter && (
                <div className="d-flex justify-content-center align-items-around ">
                    <div className="d-flex">
                        <div>
                            <label htmlFor="pencil">Pencil</label>
                            <input type="radio" name="tool" id="pencil" checked={tool === "pencil"} value="pencil" className="mt-1" onChange={(e) => setTool(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="line">Line</label>
                            <input type="radio" name="tool" id="line" checked={tool === "line"} value="line" className="mt-1" onChange={(e) => setTool(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="rect">Rectagle</label>
                            <input type="radio" name="tool" id="rect" checked={tool === "rect"} value="rect" className="mt-1" onChange={(e) => setTool(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex">
                            <label htmlFor="color">Select Color</label>
                            <input type="color" id="color" className="mt-1" value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                    </div>
                    <div className="d-flex gap-1">
                        <button className="btn btn-primary" disabled={elements.length == 0} onClick={undo}> Undo</button>
                        <button className="btn btn-primary" disabled = {history.length < 1} onClick={redo}> Redo</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger" onClick={handleClearCanvas}>Clear Canvas</button>
                    </div>
                </div>
            )
        }
        <div className="col-md-10">
            <WhiteBoard 
            canvasRef={canvasRef} 
            cntxtRef={cntxtRef} 
            elements={elements} 
            setElements={setElements} 
            color={color} 
            tool={tool} 
            user={user}
            socket={socket}
            />
        </div>
        
    </div>
  )
}

export default Room
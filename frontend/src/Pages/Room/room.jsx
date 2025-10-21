import { useState } from "react"
import "./Room.css"
import WhiteBoard from "../../Components/WhiteBoard/whiteBoard";

const Room = () => {

   const [tool,setTool] = useState("pencil"); 
   const [color,setColor] = useState("black"); 

  return (
    <div className="row ">
        <h1 className="text-center py-5">White Board App <span className="text-primary"> [Users Online : 0]</span></h1>
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
                <button className="btn btn-primary"> Undo</button>
                <button className="btn btn-primary"> Redo</button>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger">Clear Canvas</button>
            </div>
        </div>
        <div className="col-md-10">
            <WhiteBoard/>
        </div>
        
    </div>
  )
}

export default Room
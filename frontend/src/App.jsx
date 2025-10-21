import Forms from './Components/Forms/Forms'
import {Routes, Route} from 'react-router-dom'
import Room from './Pages/Room/room'

const App = () => {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Forms/>}/>
        <Route path='/:roomId' element={<Room/>} />
      </Routes>

      
    </div>
  )
}

export default App

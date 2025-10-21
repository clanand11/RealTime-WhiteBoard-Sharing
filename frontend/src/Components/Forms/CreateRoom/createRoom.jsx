import React from 'react'

const CreateRoom = () => {
  return (
    <div>
        <form className='form col-md-12 mt-5'>
          <div className="form-group">
            <input type="text" className='form-control my-2' placeholder='Enter your name'/>
          </div>
          <div className="form-group">
            <div className="input-group d-flex">
              <input type="text" className='form-control my-2' placeholder='Generate room code' disabled/>
            </div>
            <div className="input-group-append d-flex gap-1">
              <button className='btn btn-primary btn-sm' type='button'> Generate</button>
              <button className="btn btn-outline-danger btn-sm" type='button'>Copy</button>
            </div>
          </div>
          <button type='submit' className='mt-4 btn-primary btn-block form-control'>Generate</button>
        </form>
    </div>
  )
}

export default CreateRoom
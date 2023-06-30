import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';

/////ICONOS///////

const equis = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

const lupa = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#616475" className="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

const arrow = <svg xmlns="http://www.w3.org/2000/svg" fill='#616475' width="30" height="30" viewBox="0 -960 960 960"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>


function BarLeft(props) {
  return (
    <div className={props.clase} style={{width:"100wh", height:"100vh"}}>
      <div className='d-flex flex-column align-items-center gap-4 w-100' style={{backgroundColor:"#1e213a", maxWidth:"26rem"}}>
        <div className='my-3 w-75 d-flex flex-row-reverse'><CloseButton variant='white'/>;</div>
        <div className='d-flex gap-1'>
          <div className='d-flex align-items-center gap-1 px-2' style={{border:"1px solid #616475"}}>
            {lupa}
            <input style={{backgroundColor:"#1e213a"}} className='border-0' placeholder='Search location' type="text" />
          </div>
          <button className='text-white p-1 border-0' style={{backgroundColor:"#3c47e9"}}>Search</button>
        </div>
        <div className='d-flex flex-column w-75 my-4 gap-4'>
          <button className='text-white border-0 d-flex justify-content-between' style={{backgroundColor:"#1e213a"}}>London {arrow} </button>
          <button className='text-white border-0 d-flex justify-content-between' style={{backgroundColor:"#1e213a"}}>Barcelona {arrow}</button>
          <button className='text-white border-0 d-flex justify-content-between' style={{backgroundColor:"#1e213a"}}>Long Beach {arrow}</button>
        </div>
      </div>
      <div >
        
      </div>
      
    </div>
  )
}

export default BarLeft
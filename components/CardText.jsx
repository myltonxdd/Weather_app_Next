import React from 'react'

function CardText(props) {
  return (
    <div className='d-flex flex-column text-white align-items-center justify-content-center w-100' style={{backgroundColor:"#1e213a", maxWidth:"22rem", }}>
        
        <p className='pt-2 m-0'>{props.carac} </p>
        <div className='p-0 w-75 d-flex justify-content-center'>
            <div className='p-0 m-0' style={{fontSize:"60px"}}>{props.number}<span className='fs-1'>{props.tipo}</span> </div>
        </div>
        <span className='w-75 h-100 pb-2 '>{props.extra}</span> 
        
    </div>
  )
}

export default CardText
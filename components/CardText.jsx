import React from 'react'

function CardText(props) {
  return (
    <div className='d-flex flex-column text-white align-items-center' style={{backgroundColor:"#1e213a", maxWidth:"24rem", minWidth:"18rem"}}>
        
        <p className='pt-3 m-0'>{props.carac} </p>
        <div >
            <span style={{fontSize:"75px"}}>{props.number}</span>
            <span className='fs-1'>{props.tipo}</span>
        </div>
        <div>{props.custom} </div>
    </div>
  )
}

export default CardText
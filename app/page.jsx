"use client"
import CardImg from "@/components/CardImg"
import Button from 'react-bootstrap/Button';
import Image from "next/image";
/* import { useState, useEffect } from "react" */

/* https://api.openweathermap.org/data/2.5/forecast?id=3652462&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7 */

const location = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>

const iconTarg = <svg width="13" height="13" viewBox="0 0 24 25" fill="currentColor" className="d-flex bi bi-geo-alt-fill h-100 w-100" xmlns="http://www.w3.org/2000/svg"><path d="M11 2a1 1 0 0 1 2 0v2.062A8.004 8.004 0 0 1 19.938 11H22a1 1 0 0 1 0 2h-2.062A8.004 8.004 0 0 1 13 19.938V22a1 1 0 0 1-2 0v-2.062A8.004 8.004 0 0 1 4.062 13H2a1 1 0 0 1 0-2h2.062A8.004 8.004 0 0 1 11 4.062V2zm7 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#000000"/></svg>

async function getData(){
  const parameter = await fetch("https://api.openweathermap.org/data/2.5/weather?q=quito&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7")
  const data = await parameter.json()
  return data
}



export default async function Home() {
  const datos = await getData()
  /* console.log(datos) */

  

  return (
    <div className="d-flex display-raw flex-wrap" style={{backgroundColor:"#100e1d"}}>
      
      
      {/*///////////////Izquierda/////////////////// */}
      <div className="d-flex flex-column align-items-center text-white-50 w-100 py-4" style={{backgroundColor:"#1e213a", maxWidth:"28rem"}}>

        <div className="d-flex flex-raw justify-content-between w-100">
          <Button variant="secondary" className="mx-2">Search for places</Button>{' '}
          <Button variant="secondary" className="rounded-circle mx-2 p-1">{iconTarg}</Button>{' '}
        </div>
        <div className="nubesBox d-flex flex-column align-items-center w-100">
          <img src="./Shower.png" className="card-img-top w-50 m-5" alt="Wheater"/>
          
          
        </div>
        <div className="d-flex flex-column gap-3">
          <h1 style={{fontSize:"60px"}}>15°C</h1>
          <h2 >Shower</h2>
          <div>Today - Fri, 5 jun</div>
          <div>
            {location} Helsinky
          </div>
        </div>
        
        
      
      </div>

      {/*////////////// izquierda BUSQUEDA/////////// */}
      {/* {<div >
        <h1>Hol</h1>
      </div>} */}

      {/* ///////////// DERECHA //////////////// */}

      <div className="">
        <div className="d-flex justify-content-end gap-1">
          <button type="button" className="btn btn-secondary rounded-circle p-1">°C</button>
          <button className="btn btn-secondary rounded-circle p-1">°F</button>
        </div>
        <div>
          <CardImg/>
        </div>
        <div>
          <h3>Today's Highlights</h3>
          cards
        </div>
        <div className="text-white-50">
          created by Milton Procel M. - devChallenges.io
        </div>
      
        

      </div>

    </div>
  )
}

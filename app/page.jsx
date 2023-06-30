"use client"
import CardImg from "@/components/CardImg"
import BarLeft from "@/components/BarLeft"
import Button from 'react-bootstrap/Button';
import Image from "next/image";

/* import { useState, useEffect } from "react" */

/* https://api.openweathermap.org/data/2.5/forecast?id=3652462&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7 */

const location = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>

const iconTarg = <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="white" viewBox="0 -960 960 960" ><path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Z"/></svg>

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
      
      {/*////////////// izquierda BUSQUEDA/////////// */}
      
      <BarLeft/>


      {/*///////////////Izquierda/////////////////// */}
      <div className="d-flex flex-column align-items-center text-white-50 w-100 py-4" style={{backgroundColor:"#1e213a", maxWidth:"26rem"}}>

        <div className="d-flex flex-raw justify-content-between w-100">
          <Button variant="secondary" className="mx-2">Search for places</Button>{' '}
          <Button variant="secondary" className="rounded-circle mx-2 p-1">{iconTarg}</Button>{' '}
        </div>
        <div className="nubesBox d-flex flex-column align-items-center w-100">
          <img src="./Shower.png" className="card-img-top w-50 m-5" alt="Wheater"/>
          
          
        </div>
        <div className="d-flex flex-column align-items-center gap-3 pb-1">
          <h1 style={{fontSize:"15vh"}}>15°C</h1>
          <h2 className="fs-2">Shower</h2>
          <div className="fs-3">Today - Fri, 5 jun</div>
          <div className="fs-3">
            {location} Helsinky</div>
        </div >
        
        
      
      </div>

      

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

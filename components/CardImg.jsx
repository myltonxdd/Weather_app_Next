import React from "react";

/* https://api.openweathermap.org/data/2.5/forecast?id=3652462&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7 */

function CardImg(props) {
  let climaImg = ""
  switch(props.clima){
    case `Clear`:
      climaImg=`./Clear.png`
      console.log(`Limpio`)
    break;
    case `Clouds`:
      climaImg=`./HeavyCloud.png`
      console.log(`Nubes`)
    break;
    case `Thunderstorm`:
      climaImg=`./Thunderstorm.png`
      console.log(`Tormenta`)
    break;
    case `Drizzle`:
      climaImg=`./LightRain.png`
      console.log(`Llovizna`)
    break;
    case `Rain`:
      climaImg=`./HeavyRain.png`
      console.log(`Lluvia`)
    break;
    case `Snow`:
      climaImg=`./Snow.png`
      console.log(`Nieve`)
    break;
    case `Atmosphere`:
      climaImg=`./Shower.png`
      console.log(`Atmosfera`)
    break;
  }

  return (
    <div>
      
      <div className="d-flex flex-column align-items-center h-100 w-100" style={{minHeight:"13.5rem", maxWidth:"10rem"}} >
        <div className="card h-100 align-items-center flex-column justify-content-evenly" style={{backgroundColor:"#1e213a", }}>
          <p className="text-white fs-4 mt-3">{props.day}</p>
          <div className="d-flex flex-column align-items-center w-100 h-100">
            <img src={climaImg} className="card-img-top w-50" alt="Wheater"/>
          </div>
          <div className="card-body w-100">
            <div className="d-flex justify-content-between">
              <span className="text-white">{props.tMax}°C</span>
              <span className="text-white-50">{props.tMin}°C</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CardImg;

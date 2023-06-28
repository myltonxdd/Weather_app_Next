import React from "react";

/* https://api.openweathermap.org/data/2.5/forecast?id=3652462&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7 */

function CardImg(props) {

 /*  switch(datos.weather[0].main){
    case `Clear`:
      iconoAnimado.src=`animated/day.svg`
      console.log(`Limpio`)
    break;
    case `Clouds`:
      iconoAnimado.src=`animated/cloudy-day-1.svg`
      console.log(`Nubes`)
    break;
    case `Thunderstorm`:
      iconoAnimado.src=`animated/thunder.svg`
      console.log(`Tormenta`)
    break;
    case `Drizzle`:
      iconoAnimado.src=`animated/rainy-2.svg`
      console.log(`Llovizna`)
    break;
    case `Rain`:
      iconoAnimado.src=`animated/rainy-7.svg`
      console.log(`Lluvia`)
    break;
    case `Snow`:
      iconoAnimado.src=`animated/snowy-6.svg`
      console.log(`Nieve`)
    break;
    case `Atmosphere`:
      iconoAnimado.src=`animated/weather.svg`
      console.log(`Atmosfera`)
    break;
  }
 */
  return (
    <div>
      <main>
        
        <div className="container-fluid my-4 p-3" style={{position: "relative",}}>
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            <div className="col">
              <div className="card h-100 shadow-sm" style={{backgroundColor:"#1e213a"}}>
              <h5 className="d-flex justify-content-center text-white mt-3">Today</h5>
                <img src="./Shower.png" className="card-img-top" alt="Wheater"/>
                <div className="card-body">
                  <div className="clearfix mb-3">
                    <span className="float-start badge">16°C</span>
                    <span className="float-end badge">11°C</span>
                  </div>
                <h5 className="text-white d-flex justify-content-center ">hola 123</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default CardImg;

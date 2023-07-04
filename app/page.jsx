"use client";

/* import { format, parseISO } from 'date-fns'; */
import CardImg from "@/components/CardImg";
import BarLeft from "@/components/BarLeft";
import Button from "react-bootstrap/Button";
import CardText from "@/components/CardText";
import { useEffect, useState } from "react";
import { Swanky_and_Moo_Moo } from "next/font/google";

/////////ICONS/////////////////////////

const location = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16" > <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /> </svg>
);

const iconTarg = (<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="white" viewBox="0 -960 960 960"
  > <path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75h-60Zm30-134q125 0 214.5-89.5T784-480q0-125-89.5-214.5T480-784q-125 0-214.5 89.5T176-480q0 125 89.5 214.5T480-176Zm0-154q-63 0-106.5-43.5T330-480q0-63 43.5-106.5T480-630q63 0 106.5 43.5T630-480q0 63-43.5 106.5T480-330Z" />  </svg>
);

const flchNav = ( <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" fill="white" width="35"> <path d="m211.925-150.002-21.923-21.153L480-830.766l289.998 659.611-21.923 21.153L480-270.463 211.925-150.002Z" /> </svg>
);

/////////// FUNCTIONS /////////////

async function getData() {
  const parameter = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=quito&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7"
  );
  const data = await parameter.json();
  return data;
}

export default function Home() {
  const [datos, setDatos] = useState(null);
  const [temForm, seTemForm] = useState(null);
  
  
  ////////////// JSON /////////////////

  useEffect(() => {
    const fetchData = async () => {
      const climaData = await getData();
      setDatos(climaData);
    };
    fetchData();
    funcionInit();
  }, [
    "https://api.openweathermap.org/data/2.5/forecast?q=quito&appid=bc07aa562eedf9f9d4bb3b8aa994f8b7",
  ]);

  //////// LOCALIZACION ///////////

  const funcionInit = () => {
    if (!"geolocation" in navigator) {
      return alert(
        "Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
      );
    }

    const onUbicacionConcedida = (ubicacion) => {
      console.log("Tengo la ubicación: ", ubicacion);
    };

    const onErrorDeUbicacion = (err) => {
      console.log("Error obteniendo ubicación: ", err);
    };

    const opcionesDeSolicitud = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 5000, // Esperar solo 5 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(
      onUbicacionConcedida,
      onErrorDeUbicacion,
      opcionesDeSolicitud
    );
  };

  ////////// ERROR //////////////////

  if (!datos) {
    return <div>Error: Failed to load data</div>;
  }

  console.log(datos.list[0].dt_txt);

  //////////////// IMG /////////////

  let climaImg = "";
  switch (datos.list[0].weather[0].main) {
    case `Clear`:
      climaImg = `./Clear.png`;
      console.log(`Limpio`);
      break;
    case `Clouds`:
      climaImg = `./HeavyCloud.png`;
      console.log(`Nubes`);
      break;
    case `Thunderstorm`:
      climaImg = `./Thunderstorm.png`;
      console.log(`Tormenta`);
      break;
    case `Drizzle`:
      climaImg = `./LightRain.png`;
      console.log(`Llovizna`);
      break;
    case `Rain`:
      climaImg = `./HeavyRain.png`;
      console.log(`Lluvia`);
      break;
    case `Snow`:
      climaImg = `./Snow.png`;
      console.log(`Nieve`);
      break;
    case `Atmosphere`:
      climaImg = `./Shower.png`;
      console.log(`Atmosfera`);
      break;
  }

  /////////// FECHAS /////////////
  let dia = parseInt( datos.list[0].dt_txt[8] + datos.list[0].dt_txt[9]);
  let meSet = datos.list[0].dt_txt[5] + datos.list[0].dt_txt[6];

  let mes = "";
  switch (meSet) {
    case "01":
      mes = "Ene";
      break;
    case "02":
      mes = "Feb";
      break;
    case "03":
      mes = "Mar";
      break;
    case "04":
      mes = "Abr";
      break;
    case "05":
      mes = "May";
      break;
    case "06":
      mes = "Jun";
      break;
    case "07":
      mes = "Jul";
      break;
    case "08":
      mes = "Ago";
      break;
    case "09":
      mes = "Sep";
      break;
    case "10":
      mes = "Oct";
      break;
    case "11":
      mes = "Nov";
      break;
    case "12":
      mes = "Dic";
      break;
  }
  /* console.log(mes) */

  /////////// DIR VIENTO /////

  let grados = parseFloat(datos.list[0].wind.deg)
  let gradosDir = ""
  switch (true) {
    case (grados >= 348.5 && grados < 11.5):
      gradosDir = "N";
    break;
    case (grados >= 11.5 && grados < 33.5):
      gradosDir = "NNE";
    break;
    case (grados >= 33.5 && grados < 56):
      gradosDir = "NE";
    break;
    case (grados >= 56 && grados < 78.5):
      gradosDir = "ENE";
    break;
    case (grados >= 78.5 && grados < 101):
      gradosDir = "E";
    break;
    case (grados >= 101 && grados < 123.5):
      gradosDir = "ESE";
    break;
    case (grados >= 123.5 && grados < 146):
      gradosDir = "SE";
    break;
    case (grados >= 146 && grados < 168.5):
      gradosDir = "SSE";
    break;
    case (grados >= 168.5 && grados < 191):
      gradosDir = "S";
    break;
    case (grados >= 191 && grados < 213.5):
      gradosDir = "SSW";
    break;
    case (grados >= 213.5 && grados < 236):
      gradosDir = "SW";
    break;
    case (grados >= 236 && grados < 258.5):
      gradosDir = "WSW";
    break;
    case (grados >= 258.5 && grados < 281):
      gradosDir = "W";
    break;
    case (grados >= 281 && grados < 303.5):
      gradosDir = "WNW";
    break;
    case (grados >= 303.5 && grados < 326):
      gradosDir = "NW";
    break;
    case (grados >= 326 && grados < 348.5):
      gradosDir = "NNW";
    break;

  }
  /* console.log(grados)
  console.log(gradosDir) */


  ////////// TEMP /////////
  
  const centigrados = () => seTemForm(false);
  const farengein = () => seTemForm(true);

  const multipl = 9/5 ;
  const tempFinal = temForm?multipl:1;

  console.log(((datos.list[0].main.temp_max - 273.15)*multipl).toFixed(1))

  ////////////// EXTRA ////////////////

  const progreso = (
    <div> 
      <div className="d-flex justify-content-between text-white-50" style={{ fontSize: "10px" }}>
        <span>0</span> <span>100</span>
      </div>
      <div style={{ maxHeight: ".5rem" }} className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
        <div className="progress-bar bg-warning" style={{ width: `${datos.list[0].main.humidity}%` }}></div>
      </div>
      <div className="d-flex justify-content-end text-white-50" style={{ fontSize: "10px" }}>
        <span>%</span>
      </div>
    </div>
  );

  const dirFlecha = (<div className="d-flex gap-3 align-items-center justify-content-center">
      <div className="rounded-circle" style={{rotate: `${datos.list[0].wind.deg}deg`, backgroundColor: "#616475"}}>
        {flchNav}
      </div>
      <span>{gradosDir}</span>
    </div>
  );

  ////////// QUITA - PON BARRA LAT ////////////////

  const setNavbar = () => {
    const navBar = document.getElementById("barr");
    navBar.classList.add("active");
  };

  const removeNavBar = () => {
    const navBar = document.getElementById("barr");
    navBar.classList.remove("active");
  };

  ///////////// RETRUN ///////////////////

  return (
    <div className="d-flex display-raw flex-wrap" style={{ backgroundColor: "#100e1d", width: "100vw" }}>
      {/*////////////// izquierda BUSQUEDA/////////// */}

      <BarLeft />

      {/*///////////////Izquierda/////////////////// */}
      <div className="d-flex flex-column align-items-center text-white-50 py-3 m-0 w-100" style={{backgroundColor: "#1e213a",maxWidth: "26rem",height: "100vh",  }}>
        <div className="d-flex flex-raw justify-content-between w-100">
          <Button variant="secondary" className="mx-2" onClick={setNavbar}>Search for places</Button>
          <Button variant="secondary" className="rounded-circle mx-2 p-1">{iconTarg}</Button>
        </div>
        <div className="nubesBox d-flex flex-column align-items-center w-100">
          <img src={climaImg} className="card-img-top w-50 m-4" alt="Wheater" />
        </div>
        <div className="d-flex flex-column align-items-center gap-5 pb-1">
          <h1 className="mt-3" style={{ fontSize: "15vh" }}>
            {(datos.list[0].main.temp - 273.15).toFixed(1)}°C
          </h1>
          <h2 className="fs-2">{datos.list[24].weather[0].main}</h2>
          <div className="d-flex flex-column gap-3">
            <p className="m-0">
              Today - Fri, {dia} {mes}
            </p>
            <p className="m-0">
              {location} {datos.city.name}
            </p>
          </div>
        </div>
      </div>

      {/* ///////////// DERECHA //////////////// */}

      <div className="d-flex flex-column align-items-center gap-3 pt-3 mx-3 w-100" onClick={removeNavBar} style={{maxWidth: "68rem" }}>
        <div className="d-flex justify-content-end gap-1 w-75">
          <button type="button" className="btn btn-secondary rounded-circle p-1" onClick={centigrados}>°C</button>
          <button type="button" className="btn btn-secondary rounded-circle p-1" onClick={farengein}>°F</button>
        </div>

        <div className="d-flex justify-content-center flex-wrap w-100 gap-4">
          <CardImg day="Tomorrow" clima={datos.list[0].weather[0].main} tMax={((datos.list[0].main.temp_max - 273.15)*tempFinal).toFixed(1)} tMin={((datos.list[0].main.temp_min - 273.15)*tempFinal).toFixed(1)}/>
          <CardImg day={dia + 2} monty={mes} clima={datos.list[8].weather[0].main} tMax={((datos.list[8].main.temp_max - 273.15)*tempFinal).toFixed(1)} tMin={((datos.list[0].main.temp_min - 273.15)*tempFinal).toFixed(1)}/>
          <CardImg day={dia + 3} monty={mes} clima={datos.list[16].weather[0].main} tMax={((datos.list[16].main.temp_max - 273.15)*tempFinal).toFixed(1)} tMin={((datos.list[0].main.temp_min - 273.15)*tempFinal).toFixed(1)}/>
          <CardImg day={dia + 4} monty={mes} clima={datos.list[24].weather[0].main} tMax={((datos.list[24].main.temp_max - 273.15)*tempFinal).toFixed(1)} tMin={((datos.list[0].main.temp_min - 273.15)*tempFinal).toFixed(1)} />
        </div>
        
        <div className="d-flex flex-column w-100 pt-3 gap-2">
          <h3 className="text-white px-5">Today's Highlights</h3>
          <div className="d-flex justify-content-center flex-row flex-wrap gap-3">
            <CardText carac="Wind status" number={datos.list[0].wind.speed} tipo="mph" extra={dirFlecha}/>
            <CardText carac="Humidity" number={datos.list[0].main.humidity} tipo="%" extra={progreso}/>
            </div>
          <div className="d-flex justify-content-center flex-row flex-wrap gap-3">
            <CardText carac="Visibility" number={datos.list[0].visibility / 1000} tipo="miles"/>
            <CardText carac="Air Presure" number={datos.list[0].main.pressure} tipo="mb"/>
          </div>
        </div>
        <div className="text-white-50 pt-2">
          <p>created by Milton Procel M.</p>
        </div>
      </div>
    </div>
  );
}

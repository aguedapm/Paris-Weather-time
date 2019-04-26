import React from 'react';
import './WeatherDiv.css';


//l'objet Weather Data est celui qui est passé par le props de la balise WeatherDiv dans App.js. C'est un objet retourné dans le state par l'API
const WeatherDiv = props =>{
    const icon = "http://openweathermap.org/img/w/" + props.weather[0].icon + ".png"
    const dayIndex = new Date().getDay() + props.index
    const daylist = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi"]
    const today = daylist[dayIndex]
   
    return (
        <div className="weatherDiv">
            <h1 className="city">{props.city}</h1>
            <img className="weatherImage" src={icon} alt="Weather"/>
            <h1 className="day">{today}</h1>
            <p className="description">{props.weather[0].description}</p>
            <p className="description">{props.main.temp} °C</p>

        </div>
    )

}
export default WeatherDiv
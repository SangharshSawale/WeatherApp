import SearchBox from './SearchBox'
import InfoxBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Pune",
        feelslike : 24.84,
        temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        weather : "clear sky"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
        <h2 style={{color:"white"}}>Weather App </h2>
        <div className="weatherContainer">
            <SearchBox className="searchbox" updateInfo={updateInfo}/>
            <InfoxBox className="cardsection" info={weatherInfo}/>
        </div>
        </>
    );
}
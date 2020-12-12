
import React, { useState } from 'react';
import dotenv from 'dotenv';
import './App.css';

dotenv.config();
const api = {
  key : 'ba1c7f0e928a94a790928ae02faeed1a',
  url : 'https://api.openweathermap.org/data/2.5/',
}

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather]=useState('');
  

  const search = async (e) => {
    if(e.key === 'Enter'){
      const response = await fetch(`${api.url}weather?q=${query}&appid=${api.key}`);
      const data = await response.json();
      setWeather(data);
      setQuery('');
      console.log(data);
    } 
  }


  const dateBuilder = (d, con) => {

      // utc times
      let utcDelta = con * 1000;
      let utcY = d.getUTCFullYear();
      let utcM = d.getUTCMonth();
      let utcD = d.getUTCDate();
      let utcH = d.getUTCHours();
      let utcMin = d.getUTCMinutes();
      let utcS = d.getUTCSeconds();

      // conversion to local time of user
      let utc = new Date(utcY,utcM,utcD,utcH,utcMin,utcS);
      let utcSeconds = utc.getTime() + utcDelta;
      let nowTime = new Date(utcSeconds);

      // conversion into string format
      let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let day = days[nowTime.getDay()];
      let date = nowTime.getDate();
      let month = months[nowTime.getMonth()];
      let year = nowTime.getFullYear();
      let hr = nowTime.getHours();
      let mi = nowTime.getMinutes();

      // formatting hr and min
      let ampm = (hr < 11) ? 'AM' : 'PM';
      let hrConvert = (h) => (h == 0) ? 12 : h % 12;
      let doubleZero = (t) => (t < 10) ? `0${t}` : t;
      let time = `${hrConvert(hr)}:${doubleZero(mi)} ${ampm}`;

      return <div><p>{day} {month} {date} {year} </p><p> {time}</p></div>
  }

  return (
    <div className={ 
      (typeof weather.main != 'undefined') 
        ? (Math.round( (weather.main.temp - 273.15) * (9/5) + 32 ) > 60) 
          ? 'app-warm' 
          : 'app' 
        : 'app' }>
      <main>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar"
            onChange={ e=> setQuery(e.target.value) }
            value={ query }
            onKeyPress={ search }
          
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
            <div>
              <div className="location-box">
                <div className="location">{ weather.name }, { weather.sys.country } </div>
                <div className="date">{ dateBuilder(new Date(),weather.timezone) }</div>
              </div>
              <div className="weather-box">
                <div className="temp"> { Math.round( (weather.main.temp - 273.15) * (9/5) + 32 ) }<sup>o</sup> F </div>
                <div className="weather"> { weather.weather[0].main } </div>
              </div>
            </div>
          )
          : ('')
        }

      </main>
    </div>
  );
}

export default App;

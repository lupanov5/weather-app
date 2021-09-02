export default class WeatherAPI {
    constructor() {
        this._apiBase = 'http://api.openweathermap.org/data/2.5/';
        this._apiId = 'e309d7d85d60bf527df6fbe1ccbf1a8d';
    }

    getCurrentWeather = async (activeCity) => {
        const res = await fetch(`${this._apiBase}weather?q=${activeCity}&&units=metric&appid=${this._apiId}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${activeCity}` +
              `, received ${res.status}`);
          }
        const data = await res.json();
        return {
            id: data.id,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            clouds: data.weather[0].description,
            wind: data.wind.speed
        }
    }
}

/* export default class WeatherAPI {


    getCurrentWeather = async () => {
        const res = await fetch('weather.json');

        if (!res.ok) {
            throw new Error('Could not fetch');
          }
        console.log(res);  
        const data = await res.json();
        return {
            id: data.id,
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            clouds: data.weather[0].description,
            wind: data.wind.speed
        }
    }
} */


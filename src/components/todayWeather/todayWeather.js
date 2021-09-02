import summer from '../../img/summer.png';
import './todayWeather.css'

const TodayWeather = () => {
    return (
        <div className="todayWeather">
            <div className="temp">
                <h2>0</h2>
            </div>
            <h3>Псков, Россия</h3>
            <div className="cloudness">
                <img src={summer} alt="summer"/>
            </div>
            <h4>Облачность: Ясно</h4>
            <h4>Осадки: Нет</h4>
            <h4>Атмосферное давление: 754 мм рт.ст.</h4>
        </div>
    )
}

export default TodayWeather;
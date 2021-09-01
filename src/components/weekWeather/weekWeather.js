import { Row, Col } from "reactstrap";
import './weekWeather.css';

const WeekWeather = () => {
    return (
        <div className="weekWeather">
            <h2>Погода на неделю</h2>
            <Row>
                <Col className="day">
                    <h5>Понедельник</h5>
                </Col>
                <Col className="day">
                    <h5>Вторник</h5>
                </Col >
                <Col className="day">
                    <h5>Среда</h5>
                </Col>
                <Col className="day">
                    <h5>Четверг</h5>
                </Col>
                <Col className="day">
                    <h5>Пятница</h5>
                </Col>
                <Col className="day">
                    <h5>Суббота</h5>
                </Col>
                <Col className="day">
                    <h5>Воскресенье</h5>
                </Col>
            </Row>

        </div>
    )
}

export default WeekWeather;
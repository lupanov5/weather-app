import React, { Component } from 'react';
import './app.css';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/header ';
import Search from '../search';
import TodayWeather from '../todayWeather';
import WeekWeather from '../weekWeather';
import WeatherAPI from '../../services/weatherAPI';



export default class App extends Component {

    weatherAPI = new WeatherAPI();

   data = this.weatherAPI.getCurrentWeather('London')
    .then(res => {console.log(res)})

    render() {
        return (
            <div className="app">
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Search/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 'auto', offset: 1 }}>                            
                            <TodayWeather/>
                        </Col>
                        <Col lg={{ size: 'auto', offset: 1 }}>
                            <TodayWeather/>
                        </Col>
                    </Row>                
                </Container>
                <Container>
                    <WeekWeather/>
                </Container>          
            </div>
        )
    }

}
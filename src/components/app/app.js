import React from 'react';
import './app.css';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/header ';
import Search from '../search';
import TodayWeather from '../todayWeather';
import WeekWeather from '../weekWeather';

const App = () => {
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

export default App;

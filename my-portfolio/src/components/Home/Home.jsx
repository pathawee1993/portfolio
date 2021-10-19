import React, {Component} from 'react'
import { Carousel, Container } from 'react-bootstrap';
import './Home.css'
import digital_manufacturing_01 from "/src/image/digital_manufacturing_01.jpg"
import digital_manufacturing_02 from "/src/image/digital_manufacturing_02.jpg"
import solar_monitoring from "/src/image/solar_monitoring.jpg"

class Home extends Component {
    render(){
        return (
            <Container>
                <Carousel className='carousel-base'>
                    <Carousel.Item interval={1000}>
                        <h2>Utility Monitoring</h2>
                        <img
                        className="d-block w-100"
                        src={digital_manufacturing_01}
                        alt="First slide" 
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <h2>Digital Manufacturing</h2>
                        <img
                        className="d-block w-100"
                        src={digital_manufacturing_02}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <h2>Solar Monitoring System</h2>
                        <img
                        className="d-block w-100"
                        src={solar_monitoring}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}


export default Home
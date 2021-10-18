import React, {Component} from 'react'
import { Carousel, Container } from 'react-bootstrap';
import './Home.css'
import digital_manufacturing_01 from "/src/image/digital_manufacturing_01.JPG"
import digital_manufacturing_02 from "/src/image/digital_manufacturing_02.JPG"
import solar_monitoring from "/src/image/UI-Solar Monitoring.JPG"

class Home extends Component {
    render(){
        return (
            <Container>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <h2>Utility Monitoring</h2>
                        <img
                        className="d-block w-100 slide-image"
                        src={digital_manufacturing_01}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <h2>Digital Manufacturing</h2>
                        <img
                        className="d-block w-100 slide-image"
                        src={digital_manufacturing_02}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <h2>Solar Monitoring System</h2>
                        <img
                        className="d-block w-100 slide-image"
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
import React, {Component} from 'react'
import { Carousel, Container } from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render(){
        return (
            <Container>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <h2>Utility Monitoring</h2>
                        <img
                        className="d-block w-100 slide-image"
                        src="src\image\digital_manufacturing_01.JPG"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <h2>Digital Manufacturing</h2>
                        <img
                        className="d-block w-100 slide-image"
                        src="src\image\digital_manufacturing_02.JPG"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <h2>Solar Monitoring System</h2>
                        <img
                        className="d-block w-100 slide-image"
                        src="src\image\UI-Solar Monitoring.JPG"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}


export default Home
import React, {Component} from 'react'
import { Carousel, Container, Card, Row, Col, Image } from 'react-bootstrap';
import './Skills.css'
// import HTML_logo from "src/image/HTML_logo.png"
// import CSS_Logo from "src/image/CSS_logo.png"
// import JS_logo from "src/image/js-logo.png"
// import NodeJs_logo from "src/image/NodeJS_logo.png"
// import postgres_logo from "src/image/postgres-logo.png"
// import python_logo from "src/image/python-logo.png"
// import cpp_logo from "src/image/cpp_logo.png"
// import react_logo from "src/image/react_logo.png"

const mySkills = [
    "src/image/HTML_logo.png",
    "src/image/CSS_logo.png",
    "src/image/js-logo.png",
    "src/image/NodeJS_logo.png",
    "src/image/postgres-logo.png",
    "src/image/python-logo.png",
    "src/image/cpp_logo.png",
    "src/image/react_logo.png"
]

class Skills extends Component {
    
    render(){
        var cards = [];
        for (var i = 0; i < mySkills.length; i++){
            cards.push(
                <Col className='centerThing' style={{padding: '3%'}}>
                    <Image variant="top" src={mySkills[i]} style={{maxHeight: '100px', maxWidth: '100px', width: 'auto'}}  className='centerThing'/>
                </Col>
            )
        }
        return (
            <Container>
                <h2>Skills</h2>
                <Row xs={1} md={4}>
                    {cards}
                </Row>
            </Container>
        )
    }
}


export default Skills
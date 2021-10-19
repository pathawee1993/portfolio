import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skills.css';
import cpp_logo from "/src/image/cpp_logo.png";
import CSS_Logo from "/src/image/CSS_logo.png";
import HTML_logo from "/src/image/HTML_logo.png";
import JS_logo from "/src/image/js-logo.png";
import NodeJs_logo from "/src/image/NodeJS_logo.png";
import postgres_logo from "/src/image/postgres-logo.png";
import python_logo from "/src/image/python-logo.png";
import react_logo from "/src/image/react_logo.png";
import thingsboard_logo from "/src/image/thingsboard_logo_blue.svg";

const frontend = [
    HTML_logo,
    CSS_Logo,
    JS_logo,
    react_logo,
    
]

const backend = [
    NodeJs_logo,
    python_logo,
]

const database = [
    postgres_logo,
]

const utils = [
    cpp_logo,
    thingsboard_logo
]

class Skills extends Component {

    getTitle(data){
        return (
            <div style={{textAlign: 'center', top: '0'}}><h6>{data}</h6></div>      
        )
    }

    getCard(data){
        var cards = [];
        for (var i = 0; i < data.length; i++){
            cards.push(
                <div style={{margin: '5%', padding: '5%', border: '1px solid #ddd', borderRadius: '.25rem'}}>
                    <img variant="top" src={data[i]} style={{height: '50px', maxWidth: '200px', width: 'auto'}}  className='centerThing'/>
                </div>
            )
        }
        return cards
    }
    
    render(){
        
        return (
            <Container>
                <div style={{textAlign: 'center', top: '0'}}><h2>Skills</h2></div>
                <Row className='mt-4'>
                    <Col>
                        {this.getTitle('Frontend')}     
                    </Col>
                    <Col>
                        {this.getTitle('Backtend')} 
                    </Col>
                    <Col>
                        {this.getTitle('Database')} 
                    </Col>
                    <Col>
                        {this.getTitle('Utility')} 
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        {this.getCard(frontend)}
                    </Col>
                    <Col>
                        {this.getCard(backend)}
                    </Col>
                    <Col>
                        {this.getCard(database)}
                    </Col>
                    <Col>
                        {this.getCard(utils)}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Skills
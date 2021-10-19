import React, {Component} from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect'
import myPhoto from '/src/image/myPhoto3.jpg'
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css'



class About extends Component {
    
    render(){
        return (

            <Container>
                <div style={{textAlign: 'center', top: '0'}}><h2>About Me</h2></div>
                <br/>
                <Card style={{ width: '20rem' , marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
                    <Card.Body>
                        <Card.Img src={myPhoto} className="profilePic" />
                        <Card.Title>
                            <ReactTypingEffect text={["I'm Pathwee Somsak", "I'm daily lerner" ]} speed={80} eraseDelay={200} className='typingeffect'></ReactTypingEffect>
                        </Card.Title>
                        <Card.Text>
                            I'm programmer with passion and motivation. I'm coding for changing my life and for my family.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <a href='https://github.com/pathawee1993' target='_blank' rel='noopender noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                            &nbsp;&nbsp;
                            <a href='https://web.facebook.com/pathawee.somsak/' target='_blank' rel='noopender noreferrer'><FontAwesomeIcon icon={faFacebook} /></a>
                            <br/>
                            <h6>Email : pathawee.somsak@gmail.com (Job-Only)</h6>
                    </Card.Footer>
                </Card>
            </Container>
        )
    }
}


export default About
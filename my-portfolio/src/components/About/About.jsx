import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect'
import myPhoto from '/src/image/myPhoto.jpg'
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css'



class About extends Component {
    
    render(){
        return (
            <Container>
                <div className='condiv about'>
                <h1 className="subtopic">About Me</h1>
                <img src={myPhoto} className="profilePic" />
                <br/>
                <ReactTypingEffect text={["I'm Pathwee Somsak", "I'm daily lerner" ]} speed={80} eraseDelay={200} className='typingeffect'></ReactTypingEffect>
                <p>I'm programmer with passion and motivation. I'm coding for changing my life and for my family.</p>
                <a href='https://github.com/pathawee1993' target='_blank' rel='noopender noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                &nbsp;&nbsp;
                <a href='https://web.facebook.com/pathawee.somsak/' target='_blank' rel='noopender noreferrer'><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
                
            </Container>
        )
    }
}


export default About
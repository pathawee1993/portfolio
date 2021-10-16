import React, {Component} from 'react'
import { Container, Navbar, Col } from 'react-bootstrap';
import { faHome, faIcons, faGraduationCap, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css'

class Sidebar extends Component {
    render(){
        return (
            <Container className='sidebar'>
                <div style={{textAlign: 'center', margin: '3%'}}>
                    <h1>My Portfolio</h1>
                </div>
                <Navbar bg="light">
                    <Container>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faHome} />
                        &nbsp;Home
                    </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar bg="light">
                    <Container>
                    <Navbar.Brand href="/showcase">
                        <FontAwesomeIcon icon={faIcons} />
                        &nbsp;Demo
                    </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar bg="light">
                    <Container>
                    <Navbar.Brand href="/education-and-skills">
                    <FontAwesomeIcon icon={faGraduationCap} />
                        &nbsp;Education & Skills
                    </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar bg="light">
                    <Container>
                    <Navbar.Brand href="/about">
                        <FontAwesomeIcon icon={faAddressCard} />
                        &nbsp;About
                    </Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
        )
    }
}


export default Sidebar
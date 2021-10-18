import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { Container, Navbar, Row, Col } from 'react-bootstrap';


// Contents
import Home from'./components/Home/Home'
import About from'./contents/About'
import Education from'./components/Education/Education'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Skills from './components/Skills/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <Row className='fullSpace'>
        <Col xs={2} >
          <Sidebar/>
        </Col>
        <Col xs={8} className='centerThing'>
          
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/education-and-skills'>
            <Education />
            <br/>
            <br/>
            <Skills />
          </Route>
          
        </Col>
      </Row>
    </Router>
  );
}

export default App;

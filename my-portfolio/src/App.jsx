import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { Row, Col } from 'react-bootstrap';


// Contents
import Home from './components/Home/Home'
import About from './components/About/About'
import DigitalManufacturing from './components/Demo/DigitalManufacturing/DigitalManufacturing'
import Education from './components/Education/Education'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Skills from './components/Skills/Skills';

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
          <Route exact path='/digital-manufacturing'>
            <DigitalManufacturing />
          </Route>
          <Route exact path='/education-and-skills'>
            <Education />
            <br/>
            <br/>
            <Skills />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Col>
      </Row>
    </Router>
  );
}

export default App;

import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import { Row, Col, Dropdown } from 'react-bootstrap';
import React, { Component } from 'react';


// Contents
import Home from './components/Home/Home'
import About from './components/About/About'
import DigitalManufacturing from './components/Demo/DigitalManufacturing/DigitalManufacturing'
import Education from './components/Education/Education'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Skills from './components/Skills/Skills';
import ThemeBtn from './components/ThemeBtn/ThemeBtn';


const themes = [
  {
    name: 'Light',
    data: {
      sidebar : {
        color: '#000000',
        bg1: '#f8f9fa',
        bg2: '#cccccc',
        bg3: '#cccccc'
      },
      themeBtn : {
        color: '#000000',
        bg1: '#f8f9fa',
        bg2: '#cccccc',
        bg3: '#cccccc'
      }
    }
  },
  {
    name: 'Brown',
    data: {
      sidebar : {
        color: '#2D2424',
        bg1: '#EADCA6',
        bg2: '#E2C275',
        bg3: '#E2C275',
      },
      themeBtn : {
        color: '#2D2424',
        bg1: '#EADCA6',
        bg2: '#E2C275',
        bg3: '#E2C275',
      }
    }
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.themes = themes;
    this.state = {
      selectedTheme: 0
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(value){
    this.setState({
      selectedTheme : value.target.value
    })
  }


  render(){
    return(
      <Router>
        <Row className='fullSpace'>
          <Col xs={2} >
            <Sidebar theme = {this.themes[this.state.selectedTheme].data.sidebar}/>
            <ThemeBtn themes = {this.themes} theme = {this.themes[this.state.selectedTheme].data.themeBtn} onChangeValue={this.changeTheme}/>
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
    )
  }
}

export default App;

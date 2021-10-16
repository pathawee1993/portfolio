import React, { Component } from 'react'
import myPhoto from '../image/myPhoto.jpg'

class About extends Component {
    render() {
        return (
            <div className='condiv about'>
                <h1 className="subtopic">About Me</h1>
                <img src={myPhoto} className="profilePic" />
                <h3>Hi, I'm Pathawee</h3>
                <p>I'm programmer with passion and motivation. I'm coding for changing my life and for my family.</p>
            </div>
        )
    }
}

export default About

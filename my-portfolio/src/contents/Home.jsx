import React, { Component } from 'react'
import Social from '../components/Social'
import myPhoto from '../image/myPhoto2.jpg'
import ReactTypingEffect from 'react-typing-effect'
import matrix_video from '../videos/matrix_video.mp4'

class Home extends Component {
    render(){
        return (
            <div className='condiv home video_bg_div'>
                <video autoPlay muted loop className="myVideo">
                    <source src={matrix_video} type="video/mp4"/>
                </video>
                <img src={myPhoto} alt='profile' className='profilePic'></img>
                <ReactTypingEffect text={["I'm Pathwee Somsak", "I'm daily lerner" ]} speed={80} eraseDelay={200} className='typingeffect'></ReactTypingEffect>
                <Social />
            </div>
        )
    }
}

export default Home;
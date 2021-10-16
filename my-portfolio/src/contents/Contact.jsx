import React, { Component } from 'react'
import Social from '../components/Social'

class Contact extends Component {

    render(){
        return (
            <div className="condiv contact">
                <h1 className="subtopic">My Contact</h1>
                <h3>Email: pathawee.somsak@gmail.com</h3>
                <Social />
            </div>
        )
    }
}

export default Contact;
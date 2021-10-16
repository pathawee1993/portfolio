import React, { Component } from 'react'
import NavItems from './NavItems'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeItem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({"NavItemActive": item}, ()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render(){
        return (
            <nav>
                <div className="navbarTopicDiv">
                    <h1>My Portfolio</h1>
                </div>
                <ul>
                    <NavItems item='Home' toLink='/' activeNave={this.activeItem}></NavItems>
                    <NavItems item='About' toLink='/about' activeNave={this.activeItem}></NavItems>
                    <NavItems item='Education' toLink='/education' activeNave={this.activeItem}></NavItems>
                    <NavItems item='Skills' toLink='/skills' activeNave={this.activeItem}></NavItems>
                    <NavItems item='Contact' toLink='/contact' activeNave={this.activeItem}></NavItems>
                </ul>
            </nav>
        )
    }
}

export default NavBar
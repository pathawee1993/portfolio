import React, { Component } from 'react'

class SkillCard extends Component {
    render(){
        return (
            <div className='skill_card'>
                <img src={this.props.imageSrc} className="skill_image"></img>
            </div>
        )
    }
}

export default SkillCard;
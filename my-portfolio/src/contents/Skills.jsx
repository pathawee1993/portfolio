import React, { Component } from 'react'
import SkillCard from "../components/SkillCard"
import HTML_logo from "../image/HTML_logo.png"
import CSS_Logo from "../image/CSS_logo.png"
import JS_logo from "../image/js-logo.png"
import NodeJs_logo from "../image/NodeJS_logo.png"
import postgres_logo from "../image/postgres-logo.png"
import python_logo from "../image/python-logo.png"
import cpp_logo from "../image/cpp_logo.png"
import react_logo from "../image/react_logo.png"

class Skills extends Component {
    constructor(props) {
        super(props);

        this.skills = [HTML_logo,CSS_Logo,JS_logo,NodeJs_logo, postgres_logo, python_logo, cpp_logo, react_logo]
        
    }

    render(){
        return (
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                {this.skills.map((skill) => (<SkillCard imageSrc={skill}/>))}
            </div>
        )
    }
}

export default Skills;
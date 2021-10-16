import React, { Component } from 'react'
import EducationTable from '../components/EducationTable'
import HSKA_logo from '../image/Hska_logo.svg'
import Phraowitthayakon_logo from '../image/phraowitthayakom_logo.png'

class Education extends Component {
    constructor(props) {
        super(props);

        this.education = [
            {
                degree: "Bachelor of Engineer",
                title: "Electrical Engineer - Automation Technology",
                where: "Hochschule Karlsruhe - Technik und Wirtschaft, Germany",
                from: 2014,
                to: 2018,
                logo: HSKA_logo,
                link: "https://www.h-ka.de/"
            },
            {
                degree: "High School",
                title: "Mathematic - Science",
                where: "Phraowitthayakom School, Thailand",
                from: 2006,
                to: 2012,
                logo: Phraowitthayakon_logo,
                link: "http://www.pwks.ac.th/phraoweb/index.php"
            }
        ]
        
    }
    render(){
        return (
            <div className='condiv education'>
                <h1 className="subtopic">My Education</h1>
                <EducationTable education={this.education}></EducationTable>
            </div>
        )
    }
}

export default Education;
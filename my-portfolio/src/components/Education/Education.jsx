import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Education.css';
import hs_ka from '/src/image/Hska_logo.svg';
import phraowittayakom from '/src/image/phraowitthayakom_logo.png';

const education = [
    {
        degree: "Bachelor of Engineer",
        title: "Electrical Engineer - Automation Technology",
        where: "Hochschule Karlsruhe - Technik und Wirtschaft, Germany",
        from: 2014,
        to: 2018,
        logo: hs_ka,
        link: "https://www.h-ka.de/"
    },
    {
        degree: "High School",
        title: "Mathematic - Science",
        where: "Phraowitthayakom School, Thailand",
        from: 2006,
        to: 2012,
        logo: phraowittayakom,
        link: "http://www.pwks.ac.th/phraoweb/index.php"
    }
]

class Education extends Component {
    
    render(){
        return (
            <Container>
                <h2>Education</h2>
                <table className="education_table">
                    <tr>
                        <th>Degree</th>
                        <th>Title</th>
                        <th>Where</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Logo</th>
                    </tr>
                    
                    {education.map((education) => (
                        <tbody href={education.link} target="_blank" rel='noopender noreferrer'>
                            <tr >
                                <td><a href={education.link} target="_blank" rel='noopender noreferrer'>{education.degree}</a></td>
                                <td><a href={education.link} target="_blank" rel='noopender noreferrer'>{education.title}</a></td>
                                <td><a href={education.link} target="_blank" rel='noopender noreferrer'>{education.where}</a></td>
                                <td><a href={education.link} target="_blank" rel='noopender noreferrer'>{education.from}</a></td>
                                <td><a href={education.link} target="_blank" rel='noopender noreferrer'>{education.to}</a></td>
                                <td><a href={education.link} target="_blank" rel='noopender noreferrer'>
                                    <div className="education_logo_div">
                                        <img src={education.logo} className="education_logo" />
                                    </div>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </Container>
        )
    }
}


export default Education
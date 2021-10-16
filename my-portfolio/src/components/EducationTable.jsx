import React, {Component} from 'react'

class EducationTable extends Component {
    render(){
        return (
            <table className="education_table">
                <tr>
                    <th>Degree</th>
                    <th>Title</th>
                    <th>Where</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Logo</th>
                </tr>
                
                {this.props.education.map((education) => (
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
        )
    }
}


export default EducationTable
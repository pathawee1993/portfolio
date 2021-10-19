import React, { Component } from 'react';

class ThemeBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme : this.props.theme
        }
        this.themes = this.props.themes;
        this.updateTheme = this.updateTheme.bind(this);
    }

    updateTheme(newTheme){
        this.setState({theme : newTheme}, () =>{
            this.forceUpdate()
        })
    }

    componentDidUpdate() {
        if (this.state.theme != this.props.theme){
            this.updateTheme(this.props.theme)
        }
    }
    
    render(){
        var options=[]
        for (var i = 0; i < this.themes.length; i++){
            options.push(
                <option value={i} key={i}>{this.themes[i].name}</option>
            )
        }
        return (
            <div style={{display: 'flex', justifyContent: 'center', backgroundColor: this.state.theme.bg1, height:'5vh'}}>
                <div>
                <label>Themes: &nbsp;</label>
                <select onChange={this.props.onChangeValue}>
                    {options}
                </select>
                </div>
            </div>
        )
    }
}


export default ThemeBtn
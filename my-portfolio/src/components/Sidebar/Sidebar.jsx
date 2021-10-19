import React, {Component} from 'react'
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap';
import { faHome, faIcons, faGraduationCap, faAddressCard, faSortUp, faSortDown, faIndustry, faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css'
import { Link } from 'react-router-dom'

const myTree = [
    {
        label: 'Home',
        href: '/',
        icon: faHome,
        selected: true,
        display: true,
        data: []
    },
    {
        label: 'Demo',
        href: '/digital-manufacturing',
        icon: faIcons,
        selected: false,
        display: true,
        data: [
            {
                label: 'Digital Manufactoring',
                href: '/digital-manufacturing',
                icon: faIndustry,
                selected: false,
                display: true,
                data: []
            },
            // {
            //     label: 'Solar Monitoring',
            //     href: '/solar-monitoring',
            //     icon: faIcons,
            //     selected: false,
            //     display: true,
            //     data: []
            // },
        ]
    },
    {
        label: 'Education & Skills',
        href: '/education-and-skills',
        icon: faGraduationCap,
        selected: false,
        display: true,
        data: []
    },
    {
        label: 'About',
        href: '/about',
        icon: faAddressCard,
        selected: false,
        display: true,
        data: []
    },
]

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: this.props.theme
        }
        this.tree = myTree;
        this.myNav = this.getTree(this.tree, 0);
        this.updateTheme = this.updateTheme.bind(this);
    }

    updateTheme(newTheme){
        this.setState({theme : newTheme}, () =>{
            this.myNav = this.getTree(this.tree, 0)
            this.forceUpdate()
        })
    }

    componentDidUpdate() {
        if (this.state.theme != this.props.theme){
            this.updateTheme(this.props.theme)
        }
    }

    getTree(data, level){
        var myNav = []
        for (var i = 0; i < data.length; i++){
            myNav.push(
                this.getNode(data[i], level, i, data.length-1)
            )
        }
        return myNav;
    }

    getNode(data, level, index, length){
        var paddingLeft = String(level*20) + 'px';
        var arrow = [];
        var borderColor = '';
        var borderWidth = ''
        if (level==0){
            borderColor = this.state.theme.bg3
            if (index != length){
                borderWidth = '1px 0px 0px 0px';
                
            }else{
                borderWidth = '1px 0px 1px 0px';
            }
        }else{
            borderWidth = '0px';
        }
        if (data.data.length > 0){
            if (data.selected && (level==0)){
                arrow.push(
                    <FontAwesomeIcon icon={faSortUp} style={{color: this.state.theme.color}}/>
                )
            }else{
                arrow.push(
                    <FontAwesomeIcon icon={faSortDown} style={{color: this.state.theme.color}}/>
                )
            }
        }
        return (
            <div key={data.label}>
                <Row style={{display: data.display ? '': 'none', borderColor: borderColor, borderStyle: 'solid', borderWidth: borderWidth, marginRight: '0px', backgroundColor: data.selected ? this.state.theme.bg2: ''}}>
                    <Col>
                        <Nav.Link as={Link} to={data.href}>
                            <Row>
                                <Col md={11}>
                                    <Navbar onClick={() => this.handleClick(data.label)} style={{backgroundColor: 'transparent'}}>
                                        <Navbar.Brand style={{paddingLeft: paddingLeft, color: this.state.theme.color}}>
                                            &nbsp;
                                            <FontAwesomeIcon icon={data.icon} />
                                            &nbsp;{data.label}
                                        </Navbar.Brand>
                                    </Navbar>
                                </Col>
                                <Col md={1} style={{marginTop: 'auto', marginBottom: 'auto', display: 'block'}}>
                                        {arrow}
                                </Col>
                            </Row>
                        </Nav.Link>
                    </Col>
                </Row>
                {this.getTree(data.data, level+1)}
            </div>
        )
    }

    setSelected(label){
        for (var i = 0; i < this.tree.length; i++){
            if (this.tree[i].label == label){
                this.tree[i].selected = true;
            }else{
                this.tree[i].selected = false;
            }
            for (var j = 0; j < this.tree[i].data.length; j++){
                if (this.tree[i].data[j].label == label){
                    this.tree[i].data[j].selected = true;
                }else{
                    this.tree[i].data[j].selected = false;
                }
            }
        }

    }

    setDisplay(){
        for (var i = 0; i < this.tree.length; i++){
            for (var j = 0; j < this.tree[i].data.length; j++){
                if (this.tree[i].data[j].selected || this.tree[i].selected){
                    for (var k = 0; k < this.tree[i].data.length; k++){
                        this.tree[i].data[k].display = true
                    }
                    break;
                }else{
                    this.tree[i].data[j].display = false
                }
            }
        }
    }

    handleClick(label){
        this.setSelected(label)
        this.setDisplay()
        this.myNav = this.getTree(this.tree, 0)
        this.forceUpdate()
    }

    render(){
        
        return (
            <div className='sidebar' style={{backgroundColor : this.state.theme.bg1, color: this.state.theme.color}}>
                <div style={{textAlign: 'center', padding: '3%'}}>
                    <h1>My Portfolio</h1>
                </div>
                {this.myNav}
            </div>
        )
    }
}


export default Sidebar
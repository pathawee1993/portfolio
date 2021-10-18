import React, {Component} from 'react'
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap';
import { faHome, faIcons, faGraduationCap, faAddressCard, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
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
        href: '/demo',
        icon: faIcons,
        selected: false,
        display: true,
        data: [
            {
                label: 'Digital Manufactoring',
                href: '/digital-manufacturing',
                icon: faIcons,
                selected: false,
                display: true,
                data: []
            },
            {
                label: 'Solar Monitoring',
                href: '/solar-monitoring',
                icon: faIcons,
                selected: false,
                display: true,
                data: []
            },
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

        this.tree = myTree
        this.myNav = this.getTree(this.tree, 0)
        
    }

    getTree(data, level){
        var myNav = []
        for (var i = 0; i < data.length; i++){
            myNav.push(
                this.getNode(data[i], level)
            )
        }
        return myNav;
    }

    getNode(data, level){
        var paddingLeft = String(level*20) + 'px';
        var arrow = [];
        var border = '';
        if (level==0){
            border = '1px solid #eeeeee'
        }
        if (data.data.length > 0){
            if (data.selected && (level==0)){
                arrow.push(
                    <FontAwesomeIcon icon={faSortUp} />
                )
            }else{
                arrow.push(
                    <FontAwesomeIcon icon={faSortDown} />
                )
            }
        }
        return (
            
            <Row style={{display: data.display ? '': 'none', border: border, marginRight: '0px'}}>
                <Col>
                    <Row style={{paddingLeft: paddingLeft,backgroundColor: data.selected ? '#cccccc': ''}}>
                        <Col md={11}>
                            <Navbar onClick={() => this.handleClick(data.label)} style={{backgroundColor: 'transparent'}}>
                                <Nav.Link as={Link} to={data.href}>
                                    <Navbar.Brand>
                                        <FontAwesomeIcon icon={data.icon} />
                                        &nbsp;{data.label}
                                    </Navbar.Brand>
                                </Nav.Link>
                                
                            </Navbar>
                        </Col>
                        <Col md={1} style={{marginTop: 'auto', marginBottom: 'auto', display: 'block'}}>
                                {arrow}
                        </Col>
                    </Row>
                    {this.getTree(data.data, level+1)}
                </Col>
            </Row>
            
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
        console.log(this.tree)
        this.myNav = this.getTree(this.tree, 0)
        this.forceUpdate()
    }

    render(){
        
        return (
            <div className='sidebar'>
                <div style={{textAlign: 'center', padding: '3%'}}>
                    <h1>My Portfolio</h1>
                </div>
                {this.myNav}
            </div>
        )
    }
}


export default Sidebar
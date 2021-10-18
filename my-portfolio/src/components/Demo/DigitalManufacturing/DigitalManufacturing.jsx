import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import './DigitalManufacturing.css'
import mc_01 from "/src/components/Demo/DigitalManufacturing/image/machine_001.png"
import mc_02 from "/src/components/Demo/DigitalManufacturing/image/machine_002.jpg"
import mc_03 from "/src/components/Demo/DigitalManufacturing/image/machine_003.jpg"
import mc_04 from "/src/components/Demo/DigitalManufacturing/image/machine_004.jpg"
import mc_05 from "/src/components/Demo/DigitalManufacturing/image/machine_005.jpg"
import userImage from "/src/image/myPhoto2.jpg"

var items = [
    {
        name: "machine-001",
        status: "Running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: mc_01,
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-002",
        status: "Idle",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: mc_02,
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-003",
        status: "Running",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: mc_03,
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-004",
        status: "Stop",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: mc_04,
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
    {
        name: "machine-005",
        status: "Breakdown",
        start: "2021-10-08 8:00",
        duration: "24hr 14mins",
        end: "",
        image: mc_05,
        detail: "ajshdkljahsdkljahsdkl",
        display: true
    },
]


class DigitalManufacturing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    searchAsset(filter){
        var items = this.state.items;
        
        for (var i = 0; i < this.state.items.length; i++) {
            var itemNow = items[i];
            var txtValue = itemNow.name+itemNow.status+itemNow.start+itemNow.duration
            if (txtValue.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                items[i].display = true;
            } else {
                items[i].display = false;
            }
        }
        this.setState({
            isLoaded: true,
            items: items
        });
    }

    componentDidMount(){
        this.setState({
            isLoaded: true,
            items: items
        });
        // fetch("http://localhost:3001/read")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         console.log(result.rows);
        //     this.setState({
        //       isLoaded: true,
        //       items: result.rows
        //     });

            
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   })
    }

    searchBox(){
        return (
            <Container className='digital-manufacturing-text'>
                <label >Search asset:&nbsp;</label>
                <input type="search" id="asset-search" name="q" aria-label="Search through site content" onChange={event => this.searchAsset(event.target.value)}/>
                            
            </Container>
        )
    }

    statusDetail(){
        return (
            <Container  className='digital-manufacturing-text'>
                <div style={{backgroundColor: this.getBackgroundColor('Running')}} className='statusBox'></div><div style={{float: 'left', marginRight: '2%'}}><span>Running</span></div>
                <div style={{backgroundColor: this.getBackgroundColor('Stop')}} className='statusBox'></div><div style={{float: 'left', marginRight: '2%'}}><span>Stop</span></div>
                <div style={{backgroundColor: this.getBackgroundColor('Breakdown')}} className='statusBox'></div><div style={{float: 'left', marginRight: '2%'}}><span>Breakdown</span></div>
                <div style={{backgroundColor: this.getBackgroundColor('Idle')}} className='statusBox'></div><div style={{float: 'left', marginRight: '2%'}}><span>Idle</span></div>
                
            </Container>
        )
    }

    getBackgroundColor(status){
        if (status === 'Running'){
            return '#4caf50'
        }
        if (status === 'Stop'){
            return '#2196f3'
        }
        if (status === 'Breakdown'){
            return '#f44336'
        }
        if (status === 'Idle'){
            return '#607d8b'
        }
    }

    getUserInfo(){
        return (
            <Row>
                <Col style={{textAlign: 'right'}}  className='digital-manufacturing-text'>
                    <span className='userInfo'>pathawee.somsak@gmail.com</span><br/>
                    <span className='userInfo'>Administrator</span><br/>
                </Col>
                <Col>
                    <Image src={userImage} rounded className='userImage'/>
                </Col>
            </Row>
        )
    }

    render() {
        if (this.state.isLoaded){
            var myItems = [];
            for (var i = 0; i < this.state.items.length; i++){
                if (this.state.items[i].display){
                    myItems.push(
                        <Col>
                            <Card style={{ width: '200px' , height: '280px', backgroundColor: this.getBackgroundColor(this.state.items[i].status)}}>
                                <Card.Body>
                                <Card.Title>{this.state.items[i].name}</Card.Title>
                                <Container className='machine-card'>
                                    <Card.Img variant="top" src={this.state.items[i].image} className='machineImage'/>
                                </Container>
                                
                                <Card.Text>
                                    Status: {this.state.items[i].status}<br/>
                                    Start: {this.state.items[i].start}<br/>
                                    Duration: {this.state.items[i].duration}<br/>
                                </Card.Text>
                                <Button variant="info">Go to machine</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) 
                }
            }

            return (
                <Container className='digital-manufacturing'>
                    <Row style={{margin: '3%'}}>
                        <Col>
                            <h1 className='digital-manufacturing-text'>Asset Advisor</h1>
                        </Col>
                        <Col xs={4}>
                            {this.getUserInfo()}
                        </Col>
                    </Row>
                    <Row style={{margin: '2%'}}>
                        <Col>
                            {this.searchBox()}
                        </Col>
                        <Col xs={5}>
                            {this.statusDetail()}
                        </Col>
                    </Row>
                    <Row xs="auto" style={{margin: '2%'}}>
                        {myItems}
                    </Row>
                </Container>
            )
        }else{
            return <p>loading . . .</p>
        }
        
    }
}

export default DigitalManufacturing;
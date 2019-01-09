import React, {Component} from 'react'
import { Col, Row, Form, FormGroup, Input, Label} from 'reactstrap'
import Button  from '@material-ui/core/Button'
import axios from 'axios'
import Media from "react-media";

const styles = {
    formContainer: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto'
    },
    inputFieldMaxWidth: {
        maxWidth: '120px'
    },
    inputAmPm: {
        maxWidth: '75px',
        float: 'left'
    },
    largeInputAmPm: {
        marginLeft: '-50px',
        maxWidth: '75px',
        float: 'left'
    },
    button: {
        borderWidth: '2px',
    },
    
};

class GetAQuoteForm extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '', lastName: '', email: '', location: '', eventType: '', 
            guestCount: '0-50', barType: 'Espresso', date: '', startTime: '', startTimeAmPm: 'Am', 
            endTime: '', endTimeAmPm: 'Am', comments: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { firstName, lastName, email, location, eventType, guestCount, barType, date, 
                startTime, startTimeAmPm, endTime, endTimeAmPm, comments } = this.state

        const form = await axios.post('/api/form', {
            firstName, lastName, email, location, eventType, guestCount, barType, date, 
            startTime, startTimeAmPm, endTime, endTimeAmPm, comments
        })
    }

    render() {
        return ( 
            <div style={styles.formContainer}>
                <Form onSubmit={this.handleSubmit}>

                    <Row form >
                        <Label sm={12}> Name: </Label>
                        <Col>
                            <FormGroup inline >
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup inline>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                
                    <FormGroup>
                        <Label> Email: </Label>
                            <Input
                                type="email"
                                name="email"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label> Location: </Label>
                            <Input
                                type="text"
                                name="location"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label> Type of Event: </Label>
                            <Input
                                type="text"
                                name="eventType"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <Row>
                        <Col>
                            <Label> Guest Count: </Label>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input 
                                    style={styles.inputFieldMaxWidth}
                                    type="select"
                                    name="guestCount"
                                    onChange={this.handleChange} 
                                >
                                    <option>0-50</option>
                                    <option>50-100</option>
                                    <option>100-150</option>
                                    <option>150-200</option>
                                    <option>200+</option> 
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Label> Type of Bar: </Label>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input 
                                    style={styles.inputFieldMaxWidth}
                                    type="select"
                                    name="barType"
                                    onChange={this.handleChange} 
                                >
                                    <option>Espresso</option>
                                    <option>Pour Over</option>
                                    <option>Both</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Label>Date: </Label>
                        </Col>
                        {/* <Col>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="date"
                                    placeholder="date"
                                />
                            </FormGroup>
                        </Col> */}
                    </Row>
                    
                    <Row form >
                        <Col>
                            <Label > Start Time: </Label>
                        </Col>
                        <Col>
                            <FormGroup inline>
                                <Input 
                                    style={styles.inputFieldMaxWidth}
                                    type="select" 
                                    name="startTime"
                                    onChange={this.handleChange} 
                                >
                                    <option></option>
                                    <option>1:00</option>
                                    <option>2:00</option>
                                    <option>3:00</option>
                                    <option>4:00</option>
                                    <option>5:00</option>
                                    <option>6:00</option>
                                    <option>7:00</option>
                                    <option>8:00</option>
                                    <option>9:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Media query="(max-width: 599px)">
                            <Col>
                                <FormGroup inline>
                                    <Input
                                        style={styles.inputAmPm} 
                                        type="select"
                                        name="startTimeAmPm"
                                        onChange={this.handleChange} 
                                    >
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Media>
                        <Media query="(min-width: 600px)">
                            <Col>
                                <FormGroup inline>
                                    <Input
                                        style={styles.largeInputAmPm} 
                                        type="select"
                                        name="startTimeAmPm"
                                        onChange={this.handleChange} 
                                    >
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Media>
                    </Row>

                    <Row form > 
                        <Col >
                            <Label> End Time: </Label>
                        </Col>
                        <Col>
                            <FormGroup inline>
                                <Input 
                                    style={styles.inputFieldMaxWidth}
                                    type="select" 
                                    name="endTime"
                                    onChange={this.handleChange} 
                                >
                                    <option></option>
                                    <option>1:00</option>
                                    <option>2:00</option>
                                    <option>3:00</option>
                                    <option>4:00</option>
                                    <option>5:00</option>
                                    <option>6:00</option>
                                    <option>7:00</option>
                                    <option>8:00</option>
                                    <option>9:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Media query="(max-width: 599px)">
                            <Col>
                                <FormGroup inline>
                                    <Input
                                        style={styles.inputAmPm} 
                                        type="select"
                                        name="startTimeAmPm"
                                        onChange={this.handleChange} 
                                    >
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Media>
                        <Media query="(min-width: 600px)">
                            <Col>
                                <FormGroup inline>
                                    <Input
                                        style={styles.largeInputAmPm} 
                                        type="select"
                                        name="startTimeAmPm"
                                        onChange={this.handleChange} 
                                    >
                                        <option>AM</option>
                                        <option>PM</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Media>
                    </Row>

                    <FormGroup>
                        <Label> Comments: </Label>
                        <Input
                            type="textarea"
                            name="comments"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <Button variant="outlined" style={styles.button}>
                        Submit
                    </Button>
                    
                </Form>
            </div>
        )
    }
}

export default GetAQuoteForm
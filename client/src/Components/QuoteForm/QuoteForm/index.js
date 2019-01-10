import React, {Component} from 'react'
import { Col, Row, Form, FormGroup, Input, Label} from 'reactstrap'
import { Button } from 'reactstrap'
import axios from 'axios'
import Media from "react-media";

const styles = {
    formContainer: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto'
    },
    grayBackground: {
        background: '#fafafa'
    },
    inputFieldMaxWidth: {
        maxWidth: '130px',
        background: '#fafafa',
    },
    dateMaxWidth: {
        maxWidth: '190px',
        background: '#fafafa',
    },
    inputAmPm: {
        maxWidth: '100px',
    },
    labelMaxWidth: {
        maxWidth: '110px'
    },
    quoteText: {
        fontSize: '24px'
    }
};

class QuoteForm extends Component {
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
                    <div style={styles.quoteText} align= "center">
                        LET US CATER YOUR EVENT
                    </div>

                    <Row form >
                        <Label sm={12}> Name: </Label>
                        <Col>
                            <FormGroup inline >
                                <Input
                                    style={styles.grayBackground}
                                    type="text"
                                    name="firstName"
                                    placeholder="First"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup inline>
                                <Input
                                    style={styles.grayBackground}
                                    type="text"
                                    name="lastName"
                                    placeholder="Last"
                                    onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                
                    <FormGroup >
                        <Label> Email: </Label>
                        <Input
                            style={styles.grayBackground}
                            type="email"
                            name="email"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup >
                        <Label> Location: </Label>
                            <Input
                                style={styles.grayBackground}
                                type="text"
                                name="location"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup >
                        <Label> Type of Event: </Label>
                            <Input
                                style={styles.grayBackground}
                                type="text"
                                name="eventType"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <Media query="(max-width: 599px)">
                        <div>
                            <FormGroup>
                                <Row form>
                                    <Col style={styles.labelMaxWidth}>
                                        <Label> Guest Count: </Label>
                                    </Col>
                                    <Col style={styles.inputFieldMaxWidth}>
                                        <Input 
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
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row form>
                                    <Col style={styles.labelMaxWidth}>
                                        <Label> Type of Bar: </Label>
                                    </Col>
                                    <Col style={styles.inputFieldMaxWidth}>
                                        <Input 
                                            
                                            type="select"
                                            name="barType"
                                            onChange={this.handleChange} 
                                        >
                                            <option>Espresso</option>
                                            <option>Pour Over</option>
                                            <option>Both</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row form>
                                    <Col style={styles.labelMaxWidth}>
                                        <Label>Date: </Label>
                                    </Col>
                                    <Col style={styles.dateMaxWidth}>
                                        <FormGroup>
                                            <Input
                                                style={styles.dateMaxWidth}
                                                type="date"
                                                name="date"
                                                placeholder="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row form >
                                    <Col style={styles.labelMaxWidth}>
                                        <Label > Start Time: </Label>
                                    </Col>
                                    <Col style={styles.inputFieldMaxWidth}>
                                        <Input 
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
                                    </Col>
                                    <Col  style={styles.inputAmPm}>
                                        <Input
                                            type="select"
                                            name="startTimeAmPm"
                                            onChange={this.handleChange} 
                                        >
                                            <option>AM</option>
                                            <option>PM</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row form >
                                    <Col style={styles.labelMaxWidth}>
                                        <Label > End Time: </Label>
                                    </Col>
                                    <Col style={styles.inputFieldMaxWidth}>
                                        <Input 
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
                                    </Col>
                                    <Col  style={styles.inputAmPm}>
                                        <Input
                                            type="select"
                                            name="endTimeAmPm"
                                            onChange={this.handleChange} 
                                        >
                                            <option>AM</option>
                                            <option>PM</option>
                                        </Input>
                                    </Col>
                                </Row>
                            </FormGroup>
                            
                        </div>
                    </Media>

                    <Media query="(min-width: 600px)">
                        <div>
                            <Row form>
                                <Col xs="3">
                                    <Label> Guest Count: </Label>
                                </Col>
                                <Col xs="3">
                                    <FormGroup inline>
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

                            <Row form>
                                <Col xs="3">
                                    <Label> Type of Bar: </Label>
                                </Col>
                                <Col xs="3">
                                    <FormGroup inline>
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

                            <Row form>
                                <Col xs="3">
                                    <Label>Date: </Label>
                                </Col>
                                <Col xs="4">
                                    <FormGroup inline>
                                        <Input
                                            type="date"
                                            name="date"
                                            placeholder="date"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            
                            <Row form >
                                <Col xs="3">
                                    <Label > Start Time: </Label>
                                </Col>
                                <Col xs="3">
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
                                <Col xs="2">
                                    <FormGroup>
                                        <Input
                                            type="select"
                                            name="startTimeAmPm"
                                            onChange={this.handleChange} 
                                        >
                                            <option>AM</option>
                                            <option>PM</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row form > 
                                <Col xs="3">
                                    <Label> End Time: </Label>
                                </Col>
                                <Col xs="3">
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
                                <Col xs="2">
                                    <FormGroup inline>
                                        <Input
                                            type="select"
                                            name="startTimeAmPm"
                                            onChange={this.handleChange} 
                                        >
                                            <option>AM</option>
                                            <option>PM</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                    </Media>

                    <FormGroup>
                        <Label> Comments: </Label>
                        <Input
                            style={styles.grayBackground}
                            type="textarea"
                            name="comments"
                            onChange={this.handleChange} />
                    </FormGroup>
                    
                    <Button > Submit </Button>
                    
                </Form>
            </div>
        )
    }
}

export default QuoteForm
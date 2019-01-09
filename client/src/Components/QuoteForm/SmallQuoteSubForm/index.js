import React, {Component} from 'react'
import { Col, Row, FormGroup, Input, Label} from 'reactstrap'
import axios from 'axios'

const styles = {
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
    }
};

class SmallQuoteSubForm extends Component {
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
        )
    }
}

export default SmallQuoteSubForm
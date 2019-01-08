import React, {Component} from 'react'
import { Col, Row, Form, FormGroup, Input, Label, Button} from 'reactstrap'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';

const styles = {
    formContainer: {
        padding: '20px',
        maxWidth: '600px'
    },
    barTypeWidth: {
        maxWidth: '120px'
    },
    inputFieldMaxWidth: {
        maxWidth: '120px'
    },
    inputAmPm: {
        maxWidth: '75px'
    }
}
class GetAQuoteForm extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return ( 
            <div style={styles.formContainer}>
                <Form onSubmit={this.handleSubmit}>

                    <Row form >
                        <Label for="email" sm={12}> Name: </Label>
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
                        <Label for="email"> Email: </Label>
                            <Input
                                type="email"
                                name="email"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="location"> Location: </Label>
                            <Input
                                type="text"
                                name="location"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="location"> Type of Event: </Label>
                            <Input
                                type="text"
                                name="eventType"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <Row>
                        <Col>
                            <Label for="numAttendees"> Guest Count: </Label>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input 
                                    style={styles.inputFieldMaxWidth}
                                    type="select"
                                    name="numGuests"
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
                            <Label for="bar"> Type of Bar: </Label>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input 
                                    style={styles.barTypeWidth}
                                    type="select"
                                    name="bar"
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
                            <Label for="date">Date: </Label>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="date"
                                    name="date"
                                    placeholder="date"
                                />
                            </FormGroup>
                        </Col>
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
                    </Row>
                    <Row form > 
                        <Col>
                            <Label> End Time: </Label>
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
                    </Row>

                    <FormGroup>
                        <Label for="message"> Comments: </Label>
                        <Input
                            type="textarea"
                            name="message"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <Button> Submit </Button>
                    
                </Form>
            </div>
        )
    }
}

export default GetAQuoteForm
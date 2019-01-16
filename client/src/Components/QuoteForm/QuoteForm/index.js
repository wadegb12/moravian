import React, {Component} from 'react'
import { Col, Row, Form, FormGroup, Input, Label} from 'reactstrap'
import { Button, Modal, ModalHeader} from 'reactstrap'
import Media from "react-media";
import styles from './styles'

import postFormData from '../../../services/email-service'

class QuoteForm extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '', lastName: '', email: '', location: '', eventType: '', 
            guestCount: '0-50', barType: 'Espresso', date: '', startTime: '', 
            startTimeAmPm: 'Am', endTime: '', endTimeAmPm: 'Am', comments: '',
            modal: false,
        }
    }

    postData = () => {
        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && 
            this.state.location !== "" && this.state.eventType !== "" &&  this.state.date !== "" && 
            this.state.startTime !== "" && this.state.endTime !== "") 
        {
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                location: this.state.location,
                eventType: this.state.eventType,
                guestCount: this.state.guestCount,
                barType: this.state.barType,
                date: this.state.date,
                startTime: this.state.startTime,
                startTimeAmPm: this.state.startTimeAmPm,
                endTime: this.state.endTime,
                endTimeAmPm: this.state.endTimeAmPm
            }

            postFormData(data)

            this.setState({firstName: '', lastName: '', email: '', location: '', eventType: '', 
                guestCount: '0-50', barType: 'Espresso', date: '', startTime: '', startTimeAmPm: 'Am', 
                endTime: '', endTimeAmPm: 'Am', comments: ''})

                this.setState({
                    modalMessage: 'We will get back to you shortly!' ,
                    modal: !this.state.modal
                })
        }
        else {
            this.setState({
                modalMessage: 'Please fill out the entire form' ,
                modal: !this.state.modal
            })
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        })
    }

    render() {
        return ( 
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} style={styles.modalContainerWidth}>
                        <div >
                            {this.state.modalMessage} 
                        </div>
                    </ModalHeader>
                </Modal>
           
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
                                        value={this.state.firstName}
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
                                        value={this.state.lastName}
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
                                value={this.state.email}
                                name="email"
                                onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup >
                            <Label> Location: </Label>
                                <Input
                                    style={styles.grayBackground}
                                    type="text"
                                    value={this.state.location}
                                    name="location"
                                    onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup >
                            <Label> Type of Event: </Label>
                                <Input
                                    style={styles.grayBackground}
                                    type="text"
                                    value={this.state.eventType}
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
                                                value={this.state.guestCount}
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
                                                value={this.state.barType}
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
                                                    value={this.state.date}
                                                    name="date"
                                                    placeholder="date"
                                                    onChange={this.handleChange} 
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
                                                value={this.state.startTime}
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
                                                value={this.state.startTimeAmPm}
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
                                                value={this.state.endTime}
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
                                                value={this.state.endTimeAmPm}
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
                                                value={this.state.guestCount}
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
                                                value={this.state.barType}
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
                                                value={this.state.date}
                                                name="date"
                                                placeholder="date"
                                                onChange={this.handleChange} 
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
                                                value={this.state.startTime}
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
                                                value={this.state.startTimeAmPm}
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
                                                value={this.state.endTime}
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
                                                value={this.state.startTimeAmPm}
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
                                value={this.state.comments}
                                name="comments"
                                onChange={this.handleChange} />
                        </FormGroup>
                        
                        <Button onClick={this.postData}> 
                            Submit 
                        </Button>
                        
                    </Form>
                </div>
            </div>
        )
    }
}

export default QuoteForm
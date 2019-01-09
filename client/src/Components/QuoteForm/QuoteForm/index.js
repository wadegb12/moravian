import React, {Component} from 'react'
import { Col, Row, Form, FormGroup, Input, Label} from 'reactstrap'
import { Button } from 'reactstrap'
import axios from 'axios'
import Media from "react-media";
import SmallQuoteSubForm from "../SmallQuoteSubForm"
import LargeQuoteSubForm from "../LargeQuoteSubForm"

const styles = {
    formContainer: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto'
    },
    grayBackground: {
        background: '#fafafa'
    }
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
                
                    <FormGroup>
                        <Label> Email: </Label>
                            <Input
                                style={styles.grayBackground}
                                type="email"
                                name="email"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label> Location: </Label>
                            <Input
                                style={styles.grayBackground}
                                type="text"
                                name="location"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label> Type of Event: </Label>
                            <Input
                                style={styles.grayBackground}
                                type="text"
                                name="eventType"
                                onChange={this.handleChange} />
                    </FormGroup>

                    <Media query="(max-width: 599px)">
                        <SmallQuoteSubForm/>
                    </Media>

                    <Media query="(min-width: 600px)">
                        <LargeQuoteSubForm/>
                    </Media>

                    <FormGroup>
                        <Label> Comments: </Label>
                        <Input
                            style={styles.grayBackground}
                            type="textarea"
                            name="comments"
                            onChange={this.handleChange} />
                    </FormGroup>
                    
                    <Button> Submit </Button>
                    
                </Form>
            </div>
        )
    }
}

export default GetAQuoteForm
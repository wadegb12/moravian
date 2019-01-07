import React, {Component} from 'react'
import { Form, FormGroup, Input, Label, Button} from 'reactstrap'
import axios from 'axios'

const styles = {
    formWidth: {
        maxWidth:'60%'
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
            <Form onSubmit={this.handleSubmit} style={ styles.formWidth }>
                <FormGroup>
                    <Label for="firstName"> First Name: </Label>
                    <Input
                        type="text"
                        name="firstName"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName"> Last Name: </Label>
                    <Input
                        type="text"
                        name="lastName"
                        onChange={this.handleChange} />
                </FormGroup>
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
                    <Label for="numAttendees"> Start Time: </Label>
                    <Input 
                        type="select" 
                        name="numAttendees"
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
                <FormGroup>
                    <Input 
                        type="select"
                        name="startTimeAMPM"
                        onChange={this.handleChange} 
                    >
                        <option></option>
                        <option>AM</option>
                        <option>PM</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="numAttendees"> End Time: </Label>
                    <Input 
                        type="select"
                        name="numAttendees"
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
                <FormGroup>
                    <Input 
                        type="select"
                        name="endTimeAMPM"
                        onChange={this.handleChange} 
                    >
                        <option></option>
                        <option>AM</option>
                        <option>PM</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="numAttendees"> Number of Attendees </Label>
                    <Input 
                        type="select"
                        name="numAttendees"
                        onChange={this.handleChange} 
                    >
                        <option></option>
                        <option>0-50</option>
                        <option>50-100</option>
                        <option>100-150</option>
                        <option>150-200</option>
                        <option>200+</option> 
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="bar"> Type of Bar </Label>
                    <Input 
                        type="select"
                        name="bar"
                        onChange={this.handleChange} 
                    >
                        <option></option>
                        <option>Espresso</option>
                        <option>Pour Over</option>
                        <option>Both</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="message"> Comments: </Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange} />
                </FormGroup>

                <Button> Submit </Button>

            </Form>
        )
    }
}

export default GetAQuoteForm
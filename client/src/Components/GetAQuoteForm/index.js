import React, {Component} from 'react'
import { Form, FormGroup, Input, Label, Button} from 'reactstrap'
import axios from 'axios'
import CustomDropdown from '../CustomDropdown'

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
                    <Label for="numAttendees"> Number of Attendees: </Label>
                    <CustomDropdown/>
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
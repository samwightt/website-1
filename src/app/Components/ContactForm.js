import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import EmailJS from 'emailjs-com';

const inputStyle = {
  maxWidth: 300,
};

const formStyle = {
  maxWidth: 600,
  fontFamily: 'Roboto',
};

const buttonStyle = {
  color: 'white',
  backgroundColor: '#0078e8',
};

const headerStyle = {
  fontWeight: 'bold',
};

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      npo: '',
      subject: '',
      message: '',
      errors: {
        name: '',
        email: '',
        npo: '',
        subject: '',
        message: '',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line object-curly-newline
    const { name, email, npo, subject, message } = this.state;

    if (!this.validateMail()) {
      return;
    }

    const templateParams = {
      contact_name: name,
      email_addr: email,
      npo_name: npo,
      subject_header: subject,
      body_content: message,
    };

    EmailJS.send(
      'default_service',
      'contact-to-blueprint',
      templateParams,
      'user_xGEMn1TRXSR1KTm9PzqDW',
    ).then(
      (response) => {
        console.log('SUCCESS', response.status, response.text);
      },
      (err) => {
        console.log(err);
      },
    );

    this.setState({
      name: '',
      email: '',
      npo: '',
      subject: '',
      message: '',
    });
  }

  onChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  validateMail() {
    const errors = {};
    // eslint-disable-next-line object-curly-newline
    const { name, subject, message, email } = this.state;
    let formIsValid = true;

    if (!name || name.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    if (!subject || subject.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    if (!message || message.length < 10) {
      errors.name = 'Minimum 10 symbols';
      formIsValid = false;
    }

    if (!email || email.length < 3) {
      errors.name = 'Minimum 3 symbols';
      formIsValid = false;
    }

    this.setState({ errors });

    return formIsValid;
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { name, email, npo, subject, message, errors } = this.state;

    return (
      <div className="container-fluid py-5" style={formStyle}>
        <h1>Contact Us</h1>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label style={headerStyle}>Name</Form.Label>
            <Form.Control
              style={inputStyle}
              name="name"
              value={name}
              error={errors.name}
              required="required"
              onChange={this.onChange}
              placeholder="Joe Bruin"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={headerStyle}>Email address</Form.Label>
            <Form.Control
              style={inputStyle}
              type="email"
              name="email"
              value={email}
              error={errors.email}
              required="required"
              onChange={this.onChange}
              placeholder="jbruin@ucla.edu"
            />
          </Form.Group>
          <Form.Group controlId="formBasicNPO">
            <Form.Label style={headerStyle}>Organization (Optional)</Form.Label>
            <Form.Control
              style={inputStyle}
              name="npo"
              value={npo}
              error={errors.npo}
              onChange={this.onChange}
              defaultValue="General"
              placeholder="UCLA"
            />
          </Form.Group>
          <Form.Group controlId="formBasicSubject">
            <Form.Label style={headerStyle}>Subject</Form.Label>
            <Form.Control
              style={inputStyle}
              name="subject"
              value={subject}
              error={errors.subject}
              required="required"
              onChange={this.onChange}
              placeholder="What's your question?"
            />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label style={headerStyle}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              value={message}
              error={errors.message}
              required="required"
              onChange={this.onChange}
              placeholder="Enter message..."
            />
          </Form.Group>
          <Button variant="light" style={buttonStyle} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

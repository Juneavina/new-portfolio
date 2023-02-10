import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './Contact.css'


const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${encodedMessage}`;
  };


  return (
    <>
    <div id='contact'>
    
    
      
      <h1 className='contact-h1'>Contact</h1>
      <div className='contact-container'>
      <p>
        Id love to connect with you! Please feel free to contact me with any questions or comments and I will get back to you as soon as possible.
      </p>
      <Form 
      onSubmit={handleSubmit}
      className='form-contact text-center'>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter the subject of your message" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type='text' rows="3" placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
    </div>
    </>
  )
}

export default Contact
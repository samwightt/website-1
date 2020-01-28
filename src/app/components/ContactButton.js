import React from "react";
// eslint-disable-next-line object-curly-newline
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="container-fluid py-5 contact-button">
      <Container>
        <h1>Contact Us</h1>
        <h4 className="subheader">Have a question? Message us here!</h4>
        <Button className="raised-button">
          <Link to="/contact">Email Us</Link>
        </Button>
        <Button
          className="raised-button blue"
          href="https://facebook.com/lablueprint"
        >
          Facebook Page
        </Button>
      </Container>
    </div>
  );
}

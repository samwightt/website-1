import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo_white from '..//../images/logo_white.png';
import { FaFacebookF, FaTwitter, FaGithub, FaMediumM } from 'react-icons/fa';

export default function Footer(props) {
  return (
    <div class="container-fluid py-5" style={footerStyle}>
      <Container>
        <Row>
          <Col sm={12} md={4} className="mb-5">
            <Image
              src={logo_white}
              height={30}
              className="pr-2"
            />
            <div class="d-inline-block" style={logoStyle} >blueprint</div>
          </Col>
          <Col xs={6} md={2} className="mb-5">
            <h6 class="mb-3">General</h6>
            <ul class="nav flex-column">
              <li class="nav-item pt-1"><a style={linkStyle} href='/'>About</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/team'>Team</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>Projects</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/contact'>Contact</a></li>
            </ul>
          </Col>
          <Col xs={6} md={2} className="mb-5">
            <h6 class="mb-3">Students</h6>
            <ul class="nav flex-column">
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>Apply</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>Process</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>FAQs</a></li>
            </ul>
          </Col>
          <Col xs={6} md={2} className="mb-5">
            <h6 class="mb-3">Nonprofits</h6>
            <ul class="nav flex-column">
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>Apply</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>Process</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'>FAQs</a></li>
            </ul>
          </Col>
          <Col xs={6} md={2} className="mb-5">
            <h6 class="mb-3">Social Media</h6>
            <ul class="nav flex-column">
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'><FaFacebookF class="mr-1"/>Facebook</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'><FaTwitter class="mr-1"/>Twitter</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='https://github.com/uclablueprint/'><FaGithub class="mr-1"/>Github</a></li>
              <li class="nav-item pt-1"><a style={linkStyle} href='/#'><FaMediumM class="mr-1"/>Blog</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={4} style={copyrightStyle}>
            &copy; Blueprint at UCLA 2019
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const logoStyle = {
  fontFamily: 'Poppins',
  fontSize: '1.1em'
};

const footerStyle = {
  backgroundColor: '#2C3E50',
  color: 'white',
  minHeight: '35vh',
  fontFamily: 'Roboto'
};

const linkStyle = {
  fontSize: '0.9em',
  fontFamily: 'Roboto', 
  color: 'rgba(249,250,252,0.6)'
};

const copyrightStyle = {
  color: 'rgba(249,250,252,0.6)',
  fontSize: '0.9em'
};
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/images/logo-removebg-preview.png";

const Header = () => {
  return (
    <Navbar expand="lg" bg="white">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            height="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-dark" id="basic-navbar-nav">
          <Nav className="ml-auto my-2 " style={{ fontSize: "1.1rem" }}>
            <Nav.Link className="text-dark fw-bold mx-2 " href="/home">
              Crypto Taxes
            </Nav.Link>
            <Nav.Link className="text-dark fw-bold mx-2" href="#link">
              Free Tools
            </Nav.Link>
            <Nav.Link className="text-dark fw-bold mx-2" href="#link">
              Resource Center
            </Nav.Link>
          </Nav>

          <Button
            style={{
              color: "white",
              backgroundColor: "blue",
              padding: "5px 15px",
              marginLeft: "3rem",
            }}
          >
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

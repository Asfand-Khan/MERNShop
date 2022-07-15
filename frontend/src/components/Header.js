import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MERN Shop</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Sign in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

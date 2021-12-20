import React from "react";
import { Col, Container, Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Auth from "../../Auth";
const AdminNav = () => {
  let History = useNavigate();
  const handleLogOut = () => {
    Auth.signout();
    History("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Button
              className="mx-auto"
              as={Col}
              variant="dark"
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AdminNav;

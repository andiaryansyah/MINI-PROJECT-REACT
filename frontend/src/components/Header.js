import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "../assets/styles/index.scss"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const Header = () => {
  const isLogin = Cookies.get("refreshToken");
  let name;
  if (isLogin) {
    const decoded = jwt_decode(isLogin);
    name = decoded.name;
  }

  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      localStorage.removeItem("name");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar fixed="top" className="navbar" variant="light" style={{ padding: "10px" }}>
        <Container>
          <Nav variant="link">
            <Navbar.Brand href="/" className="fw-bold text-light">MINI PROJECT</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            {isLogin ? (
              <>
                <Nav.Link href="/dashboard" className="navLink">
                  Dashboard
                </Nav.Link>

                <Nav.Link href="/products" className="navLink">
                  Product
                </Nav.Link>

                <Nav.Link href="/register" className="navLink">
                  Register
                </Nav.Link>
                <Nav style={{ paddingLeft: "450px" }}>
                  <Navbar.Text className="text-light" >
                    Signed in as :
                  </Navbar.Text>
                  <NavDropdown variant="light" title={ <span className="text-light navLink">{name}</span>}>
                    <NavDropdown.Item href="/" className="navLink text-dark">Home</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={Logout} href="" className="navLink text-dark">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  </Nav>
              </>
            ) : (
              <>
                <Navbar.Collapse style={{ paddingLeft: "860px" }}>
                  <Button
                    variant="outline-dark"
                    href="/login"
                    className="text-light"
                  >
                    Login
                  </Button>
                </Navbar.Collapse>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

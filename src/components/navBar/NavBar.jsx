import React from "react";
import {
    Navbar,
    Nav,
    Container,
    NavbarBrand,
    Button,
    Form,
    NavDropdown,
} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavbarBrand href="#" className="mr-auto ">
                    Ship
                    <span
                        style={{
                            color: "#F67366",
                            // fontSize: "24px",
                            // fontStyle: "normal",
                            // fontWeight: 900,
                            // lineHeight: "normal",
                        }}
                    >
                        Up
                    </span>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown
                            title="Company"
                            id="basic-nav-dropdown"
                            className="text-black"
                        >
                            <NavDropdown.Item href="#">
                                Option 1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Option 2
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className="text-black">
                            Services
                        </Nav.Link>
                        <Nav.Link href="#" className="text-black">
                            Solutions
                        </Nav.Link>
                        <Nav.Link href="#" className="text-black">
                            Industries
                        </Nav.Link>
                        <Nav.Link href="#" className="text-black">
                            Insights & News
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success" className="mr-2">
                            Request a Quote
                        </Button>
                        <Button
                            variant="outline-dark"
                            className="d-flex px-4 py-2 justify-content-center align-items-center gap-2 text-white bg-dark"
                            // style={{ transition: "background-color 0.3s" }}
                        >
                            Join Now
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;

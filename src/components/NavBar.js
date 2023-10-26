/* بسم الله الرحمن الرحيم */

import {Container, Form, Navbar} from "react-bootstrap";
import logo from "../images/logo.jpg";
import {Link} from "react-router-dom";

function NavBar({handleSubmit}) {

    return(
            <Navbar className="bg-dark">
                <Container style={{padding: "0"}}>
                    <Navbar.Brand href="#" style={{marginRight: "0"}}>
                        <Link to='/'><img src={logo} alt="logo" width={100} className="bg-dark"/></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex flex-row justify-content-between w-100 position-relative">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 search"
                                aria-label="Search"
                                onChange={(e) => handleSubmit(e.target.value)}
                            />
                            <i className="fa-solid fa-magnifying-glass position-absolute start-0 top-0 mt-2 ms-2 fs-4"></i>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavBar;

/* الحمد لله رب العالمين */
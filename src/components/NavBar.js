/* بسم الله الرحمن الرحيم */


import {Container, Form, Navbar} from "react-bootstrap";

function NavBar() {
    return(
            <Navbar expand="lg" className="bg-black">
                <Container>
                    <Navbar.Brand href="#">
                        <img src="./logo.jpg" alt="logo" width={100} className="bg-dark"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex flex-row justify-content-between w-100 position-relative">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 search"
                                aria-label="Search"
                            />
                            <i className="fa-solid fa-magnifying-glass position-absolute start-0 top-0 mt-2 ms-2 fs-4"></i>                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavBar;

/* الحمد لله رب العالمين */
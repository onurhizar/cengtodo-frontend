import { Fragment, useState } from "react"
import { Nav, Navbar, Container, Button, Offcanvas } from "react-bootstrap"

function MyNavbar(){
    const [show, setShow] = useState(false); 
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Fragment>

        <Navbar bg="light">
            <Container>
            <Navbar.Brand href="#home">iyteceng</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#todo">todo</Nav.Link>
                    <Nav.Link href="#comments" disabled>yorumlar</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="secondary" onClick={handleShow}>
                        <i class="bi bi-gear"></i>
                    </Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>

        </Fragment>
    )
}

export default MyNavbar
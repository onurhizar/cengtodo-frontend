import { Nav, Navbar, Container } from "react-bootstrap"

function MyNavbar(){

    return (
        <Navbar bg="light">
            <Container>
            <Navbar.Brand href="#home">iyteceng</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#todo">todo</Nav.Link>
                    <Nav.Link href="#comments" disabled>yorumlar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
import { Navbar as NavbarDefault, Container, Nav } from 'react-bootstrap'

const Navbar = () => {
    return (
        <div>
            <NavbarDefault bg="dark" variant="dark">
                <Container>
                    <NavbarDefault.Brand href="/">Abinav Sadhneni</NavbarDefault.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/thoughts">Thoughts</Nav.Link>
                    </Nav>
                </Container>
            </NavbarDefault>
        </div>
    )
}

export default Navbar

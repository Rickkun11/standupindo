import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home">Site Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
              <Nav.Link href="#Accesbility">Accesbility</Nav.Link>
              <Nav.Link href="#Careers">Careers</Nav.Link>
              <Nav.Link href="#Media">Media Centre</Nav.Link>
              <Nav.Link href="#FaQs">FaQs</Nav.Link>
              <Nav.Link href="#Venue">Venue Hire</Nav.Link>
              <Nav.Link href="#Contact">Contact Us</Nav.Link>
              <Nav.Link className='text-primary' href="/login">Login? | Register?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComp;
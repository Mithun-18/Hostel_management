import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbarheader() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >
            <img src="mitklogo.png" width={85} height={70}></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas className="justify-content-center collegename">MOODLAKATTE INSTITUTE OF TECHNOLOGY KUNDAPURA<br/>KUNDAPURA</Navbar.Offcanvas>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="outline-primary">Student Login</Button>{' '}
          <Button variant="outline-primary">Warden Login</Button>{' '}
          <Button variant="outline-primary">Admin Login</Button>{' '}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarheader;
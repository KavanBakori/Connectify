import { Navbar, Container, Nav, NavDropdown, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"
const Header = () => {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#D2FDB8" }}
        variant="light">
          <div>
            <Figure>
              <Figure.Image 
                height={300}
                width={600}
                alt="200x200"
                src="https://charusat.ac.in/adpicoeai/images/xcharu.png.pagespeed.ic.e79m4LIqp2.png"
              />
              <Figure.Caption></Figure.Caption>
            </Figure>
          </div>
        <Container>

          <Navbar.Brand href="#home">
            {/* Anita Devang Patel Ipcowala Center of Excellence in Artificial
            Intelligence (ADPICoE(AI)) */}
          </Navbar.Brand>
          <h1 style={{ fontSize: 44, textAlign: "center" }}>
            Anita Devang Patel Ipcowala Center of Excellence in Artificial
            Intelligence (ADPICoE(AI))
          </h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#57B580",color:'white' }}
        >
        <Container className="d-flex justify-content-evenly"> 
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto d-flex justify-content-evenly navbarbutton" >
              <div className="navbarbutton">

          {/* <Navbar.Brand href="">HOME  </Navbar.Brand> */}
              <Nav.Link href="">HOME</Nav.Link>
              <Nav.Link href="">ABOUT US</Nav.Link>
              <NavDropdown title="RESEARCH" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">TEAM</Nav.Link>
              <Nav.Link href="">EVENTS</Nav.Link>
              <Nav.Link href="">GALLERY</Nav.Link>
              <Nav.Link href="">CONTACT US</Nav.Link>
              <Nav.Link href="">DEVICES</Nav.Link>
              
              
              </div>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;

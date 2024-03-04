import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Style/main.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img src={require("../Image/logo.png")} alt="" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav mob_nav" />
        <Navbar.Collapse id="basic-navbar-nav data_mob">
          <Nav className="me-auto navbar-nav "> {/* Add justify-content-center here */}
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link">About</Nav.Link>
            <Nav.Link href="#link"className="nav-link">Mission</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              {/* <NavDropdown title="web Dropdown" id="nested-dropdown"style={{fontSize:"1px"}}>
                <NavDropdown.Item href="#action/3.4.1">Nested Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">Nested Another action</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown title="Nested Dropdown" id="nested-dropdown">
                <NavDropdown.Item href="#action/3.4.1">Nested Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">Nested Another action</NavDropdown.Item>
              </NavDropdown> */}

            </NavDropdown>
            <Nav.Link href="#home" className="nav-link">LifeCycle</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
